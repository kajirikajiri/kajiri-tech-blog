import {addDateToFileNamePrefix} from './addDateToFileNamePrefix'
import {addHeaderToMarkdown} from './addHeaderToMarkdown'
(async()=>{

  const dir:string = './src/posts/'

  await addHeaderToMarkdown(dir)

  addDateToFileNamePrefix(dir)
})()