import { useStore } from '../../store'
import { peopleArr } from '../leftSidebar/peopleList'
import './index.scss'
import IntroMessage from "./introMessage"
import TextEditor from "./textEditor"
const ChannelView = () => {

  const { activeSidebarLabel, activeSidebarIcon } = useStore();

  return <>

    <div class="channelView">
      <div class="nameSection">
        <img class="channel-icon big-icon" src={activeSidebarIcon} alt="profile-icon" />
        <span>{activeSidebarLabel} </span>
      </div>

      <div class="wrapper">
        {activeSidebarLabel === peopleArr[0].label && <IntroMessage />}
        {activeSidebarLabel !== peopleArr[0].label && <> {activeSidebarLabel}</>}

      </div>
      <TextEditor />
    </div>

  </>

}
export default ChannelView