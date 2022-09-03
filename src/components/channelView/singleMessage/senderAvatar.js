import Style from '../channelView.module.scss'
import Image from "../../global/image"
const SenderAvatar = () => {
  return <>
    <div className={`${Style.col} ${Style.avatarContainer}`}>
      <Image src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="avatar" />
    </div>
  </>
}
export default SenderAvatar