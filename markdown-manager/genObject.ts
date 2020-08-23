export const genObject = (list:string[])=> {
  return list.map((name:string)=>{
    return {before: name}
  })
}