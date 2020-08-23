import {execSync} from 'child_process'

export const getCommitDateList =(filePath:string):string=>{
  const getDateCmd = `git log --pretty=format:"<li>%cd %h</li>" --date=format:'%Y/%m/%d %H:%M:%S' '${filePath}'`
  const result = execSync(getDateCmd).toString()
  return result
}