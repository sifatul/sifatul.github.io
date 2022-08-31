import Style from './leftSidebar.module.scss'
import ChannelList from "./channelList"
import PeopleList from "./peopleList"
import Applist from "./appList"
import ChannelItem from "./channelItem"

const LeftSidebar = () => {
  return <>
    <div className={Style.workspace}>
      <div className={Style.myWorkspace}>SI</div>

    </div>

    <div className={Style.channelsPeopleWrapper}>
      <div className={Style.nameSection}> Sifatul </div>
      <div className={Style.wrapper}>
        <ChannelList />
        <PeopleList />
        <Applist />
      </div>
      <div className={`${Style.channelListSection} ${Style.huddle}`}>

        <ChannelItem

          label="Huddle" imgSrc="https://img.icons8.com/small/16/c7b7c6/radio-tower.png"
        />

      </div>
    </div>

  </>
}
export default LeftSidebar