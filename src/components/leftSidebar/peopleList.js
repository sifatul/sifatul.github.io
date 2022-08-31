import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"
import Style from "./leftSidebar.module.scss"
import { useStore } from '../../store';

export const peopleArr = [
  {
    label: "Sifatul Islam",
    imgSrc: "https://avatars.githubusercontent.com/u/10746740?v=4",

  }
]
const ChannelList = () => {

  const [open, setOpen] = useState(true)
  const { setActiveSidebar, activeSidebarLabel } = useStore();


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