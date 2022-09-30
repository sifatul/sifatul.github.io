import MessageWrapper from "../../../Hoc/messageWrapper";

import { textToLinkMarkup } from "../../../helpers/string.helper"


const TextMessage = (props) => {
  let { message, senderInfo, created_at } = props




  const messageArr = textToLinkMarkup(message).trim().split(/\r?\\n/);

  return <>
    <MessageWrapper
      {...senderInfo}
      created_at={created_at}
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