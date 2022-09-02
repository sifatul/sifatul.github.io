import MessageWrapper from "../../../Hoc/messageWrapper";


const TextMessage = (props) => {
  const { message, senderInfo } = props
  const messageArr = message.split("\n");
  return <>
    <MessageWrapper
      {...senderInfo}
    >
      <> {messageArr.map((text, idx) => {
        return <div className="block" key={idx}>{text}</div>
      })} </>
    </MessageWrapper>
  </>

}
export default TextMessage