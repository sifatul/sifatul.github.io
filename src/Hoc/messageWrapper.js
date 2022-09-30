import Style from '../components/channelView/channelView.module.scss';
import { useStore } from "../store";
import Image from "../components/global/image"
import { formatAMPM } from '../helpers/time.helper';


const MessageWrapper = (props) => {
  const { children, name, avatar, created_at = new Date().toISOString() } = props
  const { showUserProfile } = useStore();
  const timeVal = formatAMPM(created_at)

  return <>
    <div className={Style.singleMessage}>
      <div
        className={`${Style.col} ${Style.avatarContainer}`}    >
        <Image src={avatar} alt="hash-icon" />
      </div>
      <div className={Style.col}>
        <div className={Style.row}>
          <span className={`hasLink ${Style.username}`}
            onClick={e => showUserProfile(name)}
          > {name} </span>
          <span className={Style.userMessageTime}>{timeVal}</span>
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