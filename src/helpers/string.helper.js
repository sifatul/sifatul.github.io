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
function checkIfEmailInString(text) {
  var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.test(text);
}
export { textToLinkMarkup, checkIfEmailInString }