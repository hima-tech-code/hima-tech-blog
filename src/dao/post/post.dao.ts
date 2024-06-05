import prisma from "@/db/prisma";
import { ResponseReturn, Status, StatusCode } from "@/models";
import { Post, PrismaClient } from "@prisma/client";

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
        const response = new ResponseReturn<Post[]>({
          status: Status.NotFound,
          statusCode: StatusCode.NotFound,
          responseMessage: '記事を発見できませんでした'
        })
      }
      const response = new ResponseReturn<Post[]>({
        status: Status.OK,
        statusCode: StatusCode.OK,
        responseMessage: '投稿データを取得しました',
        data: posts,
      })

      return response
    } catch (error) {

    }
  }

}

export const postDao = new PostDao(prisma)
export default postDao