import {execSync} from 'child_process'

export const getLatestCommitDate =(filePath:string):string=>{
  const getDateCmd = `git log --pretty=format:"%cd" --date=format:'%Y%m%d%H%M%S' ${filePath} | awk 'NR==1' | tr -d '\r' | tr -d '\n'`
  const result = execSync(getDateCmd).toString()
  return result
}