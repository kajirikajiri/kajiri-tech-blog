import { execSync } from "child_process"
import fs from "fs"

export const getOldestCommitDate = () => {
  const toc = require("markdown-toc")
  const cmd = `git diff --name-only --staged ./content/blog/**/*.md`
  const fileNameList = execSync(cmd)
    .toString()
    .split("\n")
    .filter(s => s !== "")
  fileNameList.forEach(name => {
    const file = fs.readFileSync(name, "utf8")
    fs.writeFileSync(name, toc.insert(file))
  })
}

getOldestCommitDate()
