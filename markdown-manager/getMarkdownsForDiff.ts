import { execSync } from "child_process"

export const getMarkdownsForDiff = (dir: string): string[] => {
  const getDateCmd = `git diff --staged --name-only '${dir}'`
  console.log(getDateCmd)
  const result = execSync(getDateCmd).toString().split("\n")
  result.pop()
  return result
}
