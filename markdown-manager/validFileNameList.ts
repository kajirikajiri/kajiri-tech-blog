import path from 'path'

export const validFileNameList = (list:string[]):string[] => {
  const startsWithNumberLength14List = list.filter(file=>{
    return !(/^\d{14}/.test(path.basename(file)))
  })
  return startsWithNumberLength14List
}