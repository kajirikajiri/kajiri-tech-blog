import {getCurrentTime} from './getCurrentTime'

export const addDate =(fileNameList:{before:string}[], dirName:string):{before:string,after:string}[]=> {
  return fileNameList.map(({before})=>{
    const filePath:string = `${dirName}/${before}`
    const date:string = getCurrentTime()
    const after:string = `${dirName}/${date}${before}`
    const result:{before:string, after:string} =  {before: filePath, after}
    return result
  })
}
