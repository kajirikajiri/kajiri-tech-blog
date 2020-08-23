export const getIsToc = (line:string,lineCounter:number):boolean =>{
  switch (true) {
    case lineCounter >= 5:
      return line === '<!-- toc area start -->' || line === '<!-- toc area end -->'
    default:
      return false
  }
}