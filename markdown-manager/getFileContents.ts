import fs from 'fs'
import path from 'path'
import readline from 'readline'
import {getCurrentTime} from './getCurrentTime'
import {getCommitDateList} from './getCommitDateList'
import {getIsHeader} from './getIsHeader'
import {getIsHistory} from './getIsHistory'
import {getIsToc} from './getIsToc'

export const getFileContents = (fileName:string):Promise<string>=>{
  return new Promise((resolve, rejects)=>{
    const rs = fs.createReadStream(fileName)
    const rl = readline.createInterface(rs);
    const headerTitle = 'title: ' + path.basename(fileName)
    const headerDescription = 'description: description'
    const headerDate = 'date: ' + getCurrentTime()
    const history = `<!-- history area start -->\n<details><summary>commit history</summary><div><ol>\n${getCommitDateList(fileName)}\n</ol></div></details>\n<!-- history area end -->\n`
    const toc = '<!-- toc area start -->\n<details><summary>headline</summary><div>\n<!-- START doctoc -->\n<!-- END doctoc -->\n\n</div></details>\n\n<!-- toc area end -->\n'
    const areas:{header: string[], toc:string,content:string[],history:string } = {header:['---', headerTitle, headerDescription, headerDate, '---'], toc, content:[],history}
    let lineCounter:number = 0
    let currentLineIsHistory:boolean = false // 0, 2はok, 1で終了したらおかしい
    let currentLineIsToc:boolean=false
    rl.on('line', function(line) {
      if (lineCounter === 0) {
        // wipProcess(line)
      }
      const isHeader = getIsHeader(line, lineCounter)
      if(isHeader && lineCounter !== 3){
        areas.header[lineCounter] = line
      }
      const isHistory = getIsHistory(line, lineCounter)
      if (isHistory) currentLineIsHistory = !currentLineIsHistory
      const isToc = getIsToc(line, lineCounter)
      if (isToc) currentLineIsToc = !currentLineIsToc
      if (!isHeader && !isHistory && !currentLineIsHistory && !isToc && !currentLineIsToc){
        areas.content.push(line)
      }
      lineCounter = lineCounter + 1
    });
    rl.on('close', function(){
      if (currentLineIsHistory) throw new Error('gitのコミット履歴を書き出すために使用している行が不正です。コミット履歴から作り直すのでコミット履歴用の行を削除してください')
      if (currentLineIsToc) throw new Error('tocを書き出すために使用している行が不正です。作り直すので、toc用の行を削除してください')
      const header = areas.header.length === 0 ? '':areas.header.join('\n')+'\n'
      const toc = areas.toc.length === 0 ? '':areas.toc
      const content = areas.content.length === 0 ? '':areas.content.join('\n')+'\n'
      const history = areas.history.length === 0 ? '':areas.history
      const result = `${header}${history}${toc}${content}`
      resolve(result)
    })
    rl.on('error', ()=>{
      rejects('uuh, oh')
    })
  })
}