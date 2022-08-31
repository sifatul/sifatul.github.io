import './leftSidebar.scss'
import ChannelList from "./channelList"
import PeopleList from "./peopleList"
import Applist from "./appList"
const LeftSidebar = () => {
  return <>
    <div class="workspace">
      <div class="myWorkspace">SI</div>

    </div>

    <div class="channelsPeopleWrapper">
      <div class="nameSection"> Sifatul </div>
      <div class="wrapper">
        <ChannelList />
        <PeopleList />
        <Applist />
      </div>
      <div class="channelListSection huddle">
        <div class="channel-item ">

          <img class="channel-icon" src="https://img.icons8.com/small/16/c7b7c6/radio-tower.png" alt="radio-icon" />

          <span class="channel name"> Huddle</span>
        </div>

      </div>
    </div>

  </>
}
export default LeftSidebar