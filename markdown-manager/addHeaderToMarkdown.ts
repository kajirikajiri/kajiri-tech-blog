import fs from 'fs'
import {getFileContents} from './getFileContents'
import {getMarkdownsForDiff} from './getMarkdownsForDiff'

const addHeaderToMarkdown = async(dir:string)=>{
  const markdowns:string[] = getMarkdownsForDiff(dir)
  try {
    await Promise.all(markdowns.map(async(fileName:string)=>{
      const string = await getFileContents(fileName)
      fs.writeFileSync(`${fileName}`, string)
    }))
  }catch(e){
    console.log('catch-------')
    console.log(e)
  }
}

(async()=>{
  const dir:string = './src/posts/'
  await addHeaderToMarkdown(dir)
})()