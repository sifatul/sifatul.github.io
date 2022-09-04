import MessageWrapper from "../../../Hoc/messageWrapper";

import { textToLinkMarkup } from "../../../helpers/string.helper"


const TextMessage = (props) => {
  let { message, senderInfo } = props




  const messageArr = textToLinkMarkup(message).trim().split(/\r?\\n/);

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