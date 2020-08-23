import fs from 'fs'

export const changeFileName = (filePathList:{before:string,after:string}[]) =>{
  filePathList.forEach(({before, after}) => {
    fs.rename(before, after, err => {
      if (err) throw err;
      console.log(before + "-->" + after)
    });
  });
} 