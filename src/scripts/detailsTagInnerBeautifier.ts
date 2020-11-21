export const detailsTagInnerBeautifier = () => {
  const elements = document.querySelectorAll(
    "main > article > section > details > div > ul, main > article > section > details > div > ol"
  )
  elements.forEach(e => {
    e.setAttribute(
      "style",
      "padding: 0px 10px 10px 20px !important;margin: 0;position:absolute;background:#fff;box-shadow:0.5rem 2.5rem 2rem -1rem hsl(200 50% 20% / 40%);border-radius:5px;"
    )
  })
}
