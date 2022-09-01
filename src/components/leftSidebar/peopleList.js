import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"
import Style from "./leftSidebar.module.scss"
import { useStore } from '../../store';
import { MY_INFO } from "../../constants/index"
export const peopleArr = [
  {
    label: MY_INFO.name,
    imgSrc: MY_INFO.avatar,

  }
]
const ChannelList = () => {

  const [open, setOpen] = useState(true)
  const { setActiveSidebar, activeSidebarItem } = useStore();

  const { activeSidebarLabel } = activeSidebarItem


  return <>
    <div className={`${Style.channelListSection} ${Style.peopleList}`}>


      <ChannelLabel
        toggleOpen={() => setOpen(!open)}
        open={open}
        label="Direct messages"
      />

      {open && <>
        {peopleArr.map(channel => {
          return <ChannelItem
            key={channel.label}

            {...channel}
            activeSidebarLabel={activeSidebarLabel}
            onClick={e => setActiveSidebar(channel.label, channel.imgSrc)}
          />
        })}
        <AddChannel label="Add teammates" />
      </>}

    </div>

  </>
}
export default ChannelList