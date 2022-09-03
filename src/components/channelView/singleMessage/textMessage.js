import MessageWrapper from "../../../Hoc/messageWrapper";

import { getLinksFromText } from 'js-string-helper';

const TextMessage = (props) => {
  let { message, senderInfo } = props


  const links = getLinksFromText(message)
  for (let i = 0; i < links?.length; i++) {
    const url = links[i]
    const linkMarkup = `<a href=${url}  class="isLink" target="_blank"  >${url}</a>`
    message = message.replace(url, linkMarkup)
  }

  const messageArr = message.trim().split(/\r?\\n/);

  return <>
    <MessageWrapper
      {...senderInfo}
    >
      <> {messageArr.map((text, idx) => {
        return <div className="block" key={idx}
          dangerouslySetInnerHTML={{ __html: text }}
        >{ }</div>
      })} </>
    </MessageWrapper>
  </>

}
export default TextMessage