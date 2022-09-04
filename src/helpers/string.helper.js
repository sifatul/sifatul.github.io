import { getLinksFromText } from 'js-string-helper';

const textToLinkMarkup = (message) => {
  const links = getLinksFromText(message)
  for (let i = 0; i < links?.length; i++) {
    const url = links[i]
    const linkMarkup = `<a href=${url}  class="isLink" target="_blank"  >${url}</a>`
    message = message.replace(url, linkMarkup)
  }
  return message
}
export { textToLinkMarkup }