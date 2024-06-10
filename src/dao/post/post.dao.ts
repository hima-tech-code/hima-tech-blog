import prisma from "@/db/prisma";

import { ResponseReturn, Status, StatusCode } from "@/models";
import { Post, PrismaClient, Tag } from "@prisma/client";
import { z } from "zod";

class PostDao {
  private prisma: PrismaClient
  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  async getAllPosts() {
    try {
      const posts = await this.prisma.post.findMany({
        include: {
          tags: true
        }
      })
      if (posts.length == 0) {
        const response = new ResponseReturn<(Post & { tags: Tag[] })[]>({
          status: Status.NotFound,
          statusCode: StatusCode.NotFound,
          responseMessage: '記事を発見できませんでした',
          data: undefined,
          error: undefined,
        })

        return response
      }
      const response = new ResponseReturn<(Post & { tags: Tag[] })[]>({
        status: Status.OK,
        statusCode: StatusCode.OK,
        responseMessage: '投稿データを取得しました',
        data: posts,
        error: undefined,
      })

      return response
    } catch (error) {
      const response = new ResponseReturn<(Post & { tags: Tag[] })[]>({
        status: Status.InternalServerError,
        statusCode: StatusCode.InternalServerError,
        responseMessage: 'サーバーとの通信に失敗しました',
        data: undefined,
        error: undefined
      })
    }
  }

  async getPostById({ postId }: { postId: number }) {
    if (typeof Number(postId) != 'number') {
      const response = new ResponseReturn<Post & { tags: Tag[] }>({
        status: Status.BadRequest,
        statusCode: StatusCode.BadRequest,
        responseMessage: '正しい値が入力されていません',
        data: undefined,
        error: undefined,
      })
      return response
    }
    try {
      const post = await this.prisma.post.findUnique({
        where: {
          postId: postId
        },
        include: {
          tags: true
        },
      })
      if (!post) {
        const response = new ResponseReturn<Post & { tags: Tag[] }>({
          status: Status.NotFound,
          statusCode: StatusCode.NotFound,
          responseMessage: `ID:${postId}のデータはありませんでした`,
          data: undefined,
          error: undefined
        })
        return response
      }
      const response = new ResponseReturn<Post & { tags: Tag[] }>({
        status: Status.OK,
        statusCode: StatusCode.OK,
        responseMessage: `ID:${postId}のデータを取得しました`,
        data: post,
        error: undefined
      })
      return response
    } catch (error) {
      const response = new ResponseReturn<Post & { tags: Tag[] }>({
        status: Status.InternalServerError,
        statusCode: StatusCode.InternalServerError,
        responseMessage: 'サーバーとの通信に失敗しました',
        data: undefined,
        error: error
      })
      return response
    }
  }

  async createPost({ post, userId }: { post: Post & { tags: Tag[] }, userId: number }) {
    const postData: Partial<Post & { tags: Tag[] }> = {
      postId: post.postId,
      title: post.title,
      description: post.description,
      body: post.body,
      tags: post.tags,
      userId: userId,
    }

    const validatedData = z.object({
      postId: z.number({ message: '数値を入力してください' }).min(1, { message: 'postIdには最低1文字以上を入力してください' }),
      title: z.string({ message: 'titleには文字列型を入力してください' }).min(1, { message: 'titleには最低1文字以上を入力してください' }),
      description: z.string({ message: 'descriptionには文字列型を入力してください' }).min(1, { message: 'descriptionには1文字以上を入力してください' }),
      body: z.string({ message: 'bodyには文字列型を入力してください' }).min(1, { message: 'bodyには最低1文字以上を入力してください' }),
      tags: z.array(z.object({
        tagId: z.number({ message: 'tagIdには数値型を入力してください' }).min(1, { message: 'tagIdには最低1文字以上を入力してください' }),
        tagName: z.string({ message: 'tagNameには文字列型を入力してください' }).min(1, { message: 'tagNameには最低1文字以上を入力してください' }),
        postId: z.number({ message: 'postIdには数値型を入力してください' }).min(1, { message: 'postIdには最低1文字以上を入力してください' })
      })),
      userId: z.number({ message: 'userIdには数値型を入力して下さい' }).min(1, { message: 'userIdには最低1文字以上を入力して下さい' })

    }).safeParse(postData)

    if (!validatedData.success) {
      const response = new ResponseReturn<Post & { tags: Tag[] }>({
        status: Status.BadRequest,
        statusCode: StatusCode.BadRequest,
        responseMessage: 'バリデーションエラーです',
        data: undefined,
        error: validatedData.error
      })
      return response
    }

    try {
      const newPost = await this.prisma.post.create({
        data: {
          postId: validatedData.data.postId,
          title: validatedData.data.title,
          description: validatedData.data.description,
          body: validatedData.data.body,
          userId: validatedData.data.userId,
          tags: {
            create: validatedData.data.tags.map((item) => {
              return { tagId: item.tagId, tagName: item.tagName, postId: item.postId }
            })
          }
        }
      })
      const response = new ResponseReturn<Post>({
        status: Status.OK,
        statusCode: StatusCode.OK,
        responseMessage: '新しい投稿をしました',
        data: newPost,
        error: undefined,
      })
      return response
    } catch (error) {
      const response = new ResponseReturn<Post>({
        status: Status.InternalServerError,
        statusCode: StatusCode.InternalServerError,
        responseMessage: 'サーバーとの通信に失敗しました',
        data: undefined,
        error: undefined
      })
      return response
    }
  }

  async updatePost({ postId, post }: { postId: number, post: Partial<(Post & { tags: Tag[] })> }) {
    if (typeof Number(postId) != 'number') {
      const response = new ResponseReturn<Post>({
        status: Status.BadRequest,
        statusCode: StatusCode.BadRequest,
        responseMessage: 'postIdに不正な値が入力されています',
        data: undefined,
        error: undefined,
      })
      return response
    }

    const rowData: Partial<(Post & { tags: Tag[] })> = {
      postId: post.postId,
      title: post.title,
      description: post.description,
      body: post.body,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      userId: post.userId,
      tags: post.tags
    }

    const validatedData = z.object({
      postId: z.number({ message: 'postIdには数値型を入力して下さい' }).optional(),
      title: z.string({ message: 'titleには文字列型を入力して下さい' }).optional(),
      description: z.string({ message: 'descriptionには文字列型を入力して下さい' }).min(1, { message: 'descriptionには最低1文字以上を入力して下さい' }).optional(),
      body: z.string({ message: 'bodyには文字列型を入力して下さい' }).min(1, { message: 'bodyには最低1文字以上を入力して下さい' }).optional(),
      tags: z.array(z.object({
        tagId: z.number({ message: 'tagIdには数値型を入力してください' }).min(1, { message: 'tagIdには最低1文字以上を入力してください' }),
        tagName: z.string({ message: 'tagNameには文字列型を入力してください' }).min(1, { message: 'tagNameには最低1文字以上を入力してください' }),
        postId: z.number({ message: 'postIdには数値型を入力してください' }).min(1, { message: 'postIdには最低1文字以上を入力してください' })
      })),
      userId: z.number({ message: 'userIdには数値型を入力して下さい' }).min(1, { message: 'userIdには最低1文字以上を入力して下さい' })
    }).safeParse(rowData)

    if (!validatedData.success) {
      const response = new ResponseReturn<(Post & { tags: Tag[] })>({
        status: Status.BadRequest,
        statusCode: StatusCode.BadRequest,
        responseMessage: 'バリデーションエラーになります',
        data: undefined,
        error: validatedData.error,
      })
      return response
    }

    try {
      const updatePost = await this.prisma.post.update({
        where: {
          postId: postId
        },
        data: {
          postId: validatedData.data.postId,
          title: validatedData.data.title,
          description: validatedData.data.description,
          body: validatedData.data.body,
          tags: {
            create: validatedData.data.tags.map((item) => {
              return { tagId: item.tagId, tagName: item.tagName, postId: item.postId }
            })
          }
        }
      })

      const response = new ResponseReturn<Post>({
        status: Status.OK,
        statusCode: StatusCode.OK,
        responseMessage: `ID:${postId}のデータを更新しました`,
        data: updatePost,
        error: undefined
      })
      return response
    } catch (error) {
      const response = new ResponseReturn<Post>({
        status: Status.InternalServerError,
        statusCode: StatusCode.InternalServerError,
        responseMessage: 'サーバーとの通信に失敗しました',
        data: undefined,
        error: error
      })
      return response
    }
  }

  async deletePost({ postId }: { postId: number }) {
    if (typeof postId != 'number') {
      const response = new ResponseReturn<Post>({
        status: Status.BadRequest,
        statusCode: StatusCode.BadRequest,
        responseMessage: 'postIdの不正な値が入力されています',
        data: undefined,
        error: undefined
      })
    }
  }
}

export const postDao = new PostDao(prisma)
export default postDao