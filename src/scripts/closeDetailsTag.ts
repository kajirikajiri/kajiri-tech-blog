export const closeDetailsTag = () => {
  document.addEventListener("click", () => {
    document.querySelectorAll("details").forEach(e => {
      e.removeAttribute("open")
    })
  })
}
