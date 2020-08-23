import {execSync} from 'child_process'

export const getOldestCommitDate =(filePath:string):string=>{
  // https://stackoverflow.com/a/13598028/10677105
  const getDateCmd = `git log --pretty=format:"%cd" --date=format:'%Y%m%d%H%M%S' --reverse '${filePath}' | awk 'NR==1' | tr -d '\r' | tr -d '\n'`
  const result = execSync(getDateCmd).toString()
  return result
}