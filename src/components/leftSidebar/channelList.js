import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"
import Style from "./leftSidebar.module.scss"
import { useStore } from '../../store';
import { IMAGE_COLOR } from "../../constants/index"

export const channels = [
  {
    label: "Projects",
    imgSrc: `https://img.icons8.com/sf-regular/48/${IMAGE_COLOR}/hashtag.png`,
    imgSrcDark: "https://img.icons8.com/sf-regular/48/000000/hashtag.png",
    imgSrcWhite: "https://img.icons8.com/sf-regular/48/ffffff/hashtag.png",

  },
  {
    imgSrc: `https://img.icons8.com/sf-regular/48/${IMAGE_COLOR}/hashtag.png`,
    imgSrcDark: "https://img.icons8.com/sf-regular/48/000000/hashtag.png",
    imgSrcWhite: "https://img.icons8.com/sf-regular/48/ffffff/hashtag.png",
    label: "Experiences",
  }
]
const ChannelList = () => {

  const [open, setOpen] = useState(true)
  const { setActiveSidebar, activeSidebarItem } = useStore();
  const { activeSidebarLabel } = activeSidebarItem


  return <>
    <div className={`${Style.channelListSection} ${Style.channelList}`}>

      <ChannelLabel
        toggleOpen={() => setOpen(!open)}
        label="Channels"
        open={open}
      />
      {open && <>
        {channels.map(channel => {
          const label = channel.label
          const active = activeSidebarLabel === label
          const imgSrc = active ? channel.imgSrcWhite : channel.imgSrc
          return <ChannelItem
            key={label}
            label={label}
            imgSrc={imgSrc}
            active={active}
            onClick={e => setActiveSidebar(label, channel.imgSrcDark)}

          />
        })}
        <AddChannel label="Add channels" />
      </>}


    </div>

  </>
}
export default ChannelList