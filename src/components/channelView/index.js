import { useStore } from '../../store'
import { peopleArr } from '../leftSidebar/peopleList'
import './index.scss'
import IntroMessage from "./introMessage"
import TextEditor from "./textEditor"
const ChannelView = () => {

  const { activeSidebar } = useStore();

  return <>

    <div class="channelView">
      <div class="nameSection">
        <img class="channel-icon big-icon" src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="profile-icon" />
        <span>Sifatul Islam </span>
      </div>

      <div class="wrapper">
        {activeSidebar === peopleArr[0].label && <IntroMessage />}
        {activeSidebar !== peopleArr[0].label && <> {activeSidebar}</>}

      </div>
      <TextEditor />
    </div>

  </>

}
export default ChannelView