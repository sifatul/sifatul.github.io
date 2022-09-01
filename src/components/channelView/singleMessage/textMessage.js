import SenderInfo from "./senderInfo"
import Style from '../channelView.module.scss'

const TextMessage = (props) => {
  const { message } = props
  const messageArr = message.split("\\n");
  return <>
    <div className={Style.singleMessage}>
      <div
        className={`${Style.col} ${Style.avatarContainer}`}    >
        <img src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="hash-icon" />
      </div>
      <div className={Style.col}>
        <SenderInfo />
        <div

          className={`${Style.row} ${Style.message}`}

        >
          <> {messageArr.map((text, idx) => {
            return <div className="block" map={idx}>{text}</div>
          })} </>

        </div>
      </div>

    </div>

  </>
}
export default TextMessage