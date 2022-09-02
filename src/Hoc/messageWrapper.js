import Style from '../components/channelView/channelView.module.scss';
import { useStore } from "../store";


const MessageWrapper = (props) => {
  const { children, senderName, senderAvatar } = props
  const { showUserProfile } = useStore();
  console.log()

  return <>
    <div className={Style.singleMessage}>
      <div
        className={`${Style.col} ${Style.avatarContainer}`}    >
        <img src={senderAvatar} alt="hash-icon" />
      </div>
      <div className={Style.col}>
        <div className={Style.row}>
          <span className={`hasLink ${Style.username}`}
            onClick={e => showUserProfile()}
          > {senderName} </span>
          <span className={Style.userMessageTime}>8:06 AM</span>
        </div>
        <div

          className={`${Style.row} ${Style.message}`}

        >
          {children}

        </div>
      </div>

    </div>

  </>

}
export default MessageWrapper