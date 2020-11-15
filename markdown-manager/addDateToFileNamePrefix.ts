import fs from 'fs'
import {validFileNameList} from './validFileNameList'
import {genObject} from './genObject'
import {addDate} from './addDate'
import {changeFileName} from './changeFileName'
import {getMdList} from './getMdList'

const addDateToFileNamePrefix = (dir:string)=>{

  const fileNameList:string[] = fs.readdirSync(dir);

  const markdowns:string[] = getMdList(fileNameList)

  const validatedFileNameList:string[] = validFileNameList(markdowns)

  const objFileNameList:{before:string}[] = genObject(validatedFileNameList)

  const filePathList:{before:string, after:string}[] = addDate(objFileNameList, dir)

  changeFileName(filePathList)
}

const dir:string = './content/blog/'
addDateToFileNamePrefix(dir)