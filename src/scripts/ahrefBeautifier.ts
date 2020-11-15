export const ahrefBeautifier = () => {
  const ahrefs = document.querySelectorAll("article > section > p > a")
  ahrefs.forEach(ahref => {
    let url = ahref.innerHTML
    if (validURL(url)) {
      url = extractRootDomain(url)
    }
    ahref.innerHTML = "🔍 " + url
    ahref.setAttribute("target", "_blank")
    ahref.setAttribute("rel", "noreferrer noopener")
    ahref.setAttribute(
      "style",
      "width:100px;height:45px;padding: 1px 6px;text-decoration:none !important;border:1px solid;border-radius: 5px;  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);"
    )
  })
}

function extractRootDomain(url: string): string {
  let domain = extractHostname(url)
  const splitArr = domain.split(".")
  const arrLen = splitArr.length

  //extracting the root domain here
  //if there is a subdomain
  if (arrLen > 2) {
    domain = splitArr[arrLen - 2] + "." + splitArr[arrLen - 1]
    //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
    if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
      //this is using a ccTLD
      domain = splitArr[arrLen - 3] + "." + domain
    }
  }
  return domain
}

function extractHostname(url: string) {
  let hostname
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("//") > -1) {
    hostname = url.split("/")[2]
  } else {
    hostname = url.split("/")[0]
  }

  //find & remove port number
  hostname = hostname.split(":")[0]
  //find & remove "?"
  hostname = hostname.split("?")[0]

  return hostname
}

function validURL(str: string) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ) // fragment locator
  return !!pattern.test(str)
}