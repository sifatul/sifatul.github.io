import MessageWrapper from "../../../Hoc/messageWrapper";

import { getLinksFromText } from 'js-string-helper';

const TextMessage = (props) => {
  const { message, senderInfo } = props
  const messageArr = message.trim().split(/\r?\\n/);

  return <>
    <MessageWrapper
      {...senderInfo}
    >
      <> {messageArr.map((text, idx) => {
        const links = getLinksFromText(text)
        if (links?.length > 0) return links.map(link => {
          return <a key={link} className="isLink" href={link} target="_blank"  >{link}</a>
        })
        return <div className="block" key={idx}>{text}</div>
      })} </>
    </MessageWrapper>
  </>

}
export default TextMessage