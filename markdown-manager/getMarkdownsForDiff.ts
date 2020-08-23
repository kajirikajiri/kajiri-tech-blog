import {execSync} from 'child_process'

export const getMarkdownsForDiff =(dir:string):string[]=>{
  const getDateCmd = `git diff --staged --name-only '${dir}' | head -c -1`
  console.log(getDateCmd)
  const result = execSync(getDateCmd).toString().split('\n')
  return result
}
