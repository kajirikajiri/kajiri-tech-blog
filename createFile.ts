import fs from "fs"
/** 現在のDateオブジェクト作成 */
const date = new Date()

/** 文字列に日付をフォーマットする */
const y = `${date.getFullYear()}`
const m = `0${date.getMonth() + 1}`.slice(-2)
const d = `0${date.getDate()}`.slice(-2)
const h = `0${date.getHours()}`.slice(-2)
const mi = `0${date.getMinutes()}`.slice(-2)
const s = `0${date.getSeconds()}`.slice(-2)
const formatted = `${y}-${m}-${d} ${h}:${mi}:${s}`
const dirName = `${y}${m}${d}${h}${mi}${s}`

fs.mkdirSync(`content/blog/${dirName}`, { recursive: true })
fs.writeFileSync(
  `content/blog/${dirName}/index.md`,
  `---\ntitle: title\ndescription: description\ndate: ${formatted}\n---\n<!-- history area start -->\n<!-- history area end -->\n<!-- toc area start -->\n<details><summary>headline</summary><div>\n\n<!-- toc -->\n\n</div></details>\n\n<!-- toc area end -->\n`
)
