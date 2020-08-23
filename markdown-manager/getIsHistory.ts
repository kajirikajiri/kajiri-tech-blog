export const getIsHistory = (line:string,lineCounter:number):boolean =>{
  switch (true) {
    case lineCounter >= 5:
      return line === '<!-- history area start -->' || line === '<!-- history area end -->'
    default:
      return false
  }
}