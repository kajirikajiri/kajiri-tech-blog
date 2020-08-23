export const getMdList = (fileNameList:string[]):string[]=> {
  return fileNameList.filter(RegExp.prototype.test, /.*\.md$/)
}