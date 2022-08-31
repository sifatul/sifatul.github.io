
import Style from '../channelView.module.scss'

const SenderInfo = () => {
  return <>
    <div className={Style.row}>
      <span className={Style.username}> Sifatul </span>
      <span className={Style.userMessageTime}>8:06 AM</span>
    </div>
  </>
}
export default SenderInfo