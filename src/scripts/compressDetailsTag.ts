export const compressDetailsTag = () => {
  const liTags = document.querySelectorAll(
    "main > article > section > details > div li"
  )
  liTags.forEach(liTag => {
    liTag.setAttribute("style", "margin: 0")
  })
}
