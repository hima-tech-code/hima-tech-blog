import fs from 'fs'

import MarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import './id.module.css'


const Page = ({ params }: { params: { id: number } }) => {


  const path = `public/blog/md/${params.id}.md`

  const data = params.id !== null
    ? fs.readFileSync(path, 'utf-8')
    : "Not Found"
  return (
    <div className='markdown'>
      <MarkDown remarkPlugins={[remarkGfm]}>{data}</MarkDown>
    </div>
  )
}

export default Page