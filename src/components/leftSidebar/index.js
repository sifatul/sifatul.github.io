import { useRef } from 'react'
import { useOutsideAlerter } from "../../hooks/outsideClickHandler"
import { useStore } from '../../store'
import Applist from "./appList"
import ChannelItem from "./channelItem"
import ChannelList from "./channelList"
import Style from './leftSidebar.module.scss'
import PeopleList from "./peopleList"


const LeftSidebar = () => {

  const { activeSidebarItem, hideSidebar } = useStore();
  const { open } = activeSidebarItem


  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, hideSidebar);

  return <div className="flex">
    <div className={Style.workspace} >
      <div className={Style.myWorkspace}>SI</div>

    </div>

    {<div className={`${Style.channelsPeopleWrapper} ${open && Style.active}`} ref={wrapperRef}>
      <div className={`nameSection ${Style.nameSection}`}> Sifatul </div>
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
    </div>}

  </div>
}
export default LeftSidebar