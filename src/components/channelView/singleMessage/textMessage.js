import SenderInfo from "./senderInfo"
import Style from '../channelView.module.scss'

const TextMessage = (props) => {
  const { message } = props
  return <>
    <div className={Style.singleMessage}>
      <div
        className={`${Style.col} ${Style.avatarContainer}`}

      >
        <img src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="hash-icon" />
      </div>
      <div className={Style.col}>
        <SenderInfo />
        <div

          className={`${Style.row} ${Style.message}`}

        >
          <> {message} </>

        </div>
      </div>

    </div>

  </>
}
export default TextMessage