export const getIsHeader = (line:string,lineCounter:number):boolean =>{
  switch (lineCounter) {
    case 0:
    case 4:
      return line === '---'
    case 1: 
      return line.startsWith('title: ')
    case 2: 
      return line.startsWith('description: ')
    case 3: 
      return line.startsWith('date: ')
    default:
      return false
  }
}