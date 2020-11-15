export const ahrefBeautifier = () => {
  const ahrefs = document.querySelectorAll("article section a")
  ahrefs.forEach(ahref => {
    const url = ahref.innerHTML
    const domainName = extractRootDomain(url)
    ahref.innerHTML = "🔍 " + domainName
    ahref.setAttribute(
      "style",
      "height:45px;display:flex;padding-left:15px;align-items:center;text-decoration:none !important;border:1px solid;border-radius: 5px;  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);"
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
