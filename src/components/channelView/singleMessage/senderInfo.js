
import { useStore } from "../../../store";
import Style from '../channelView.module.scss';

const SenderInfo = () => {


  const { profileVisible, hideUserProfile, showUserProfile } = useStore();






  return <>
    <div className={Style.row}>
      <span className={`hasLink ${Style.username}`} onClick={e => showUserProfile()}> Sifatul </span>
      <span className={Style.userMessageTime}>8:06 AM</span>
    </div>
  </>
}
export default SenderInfo