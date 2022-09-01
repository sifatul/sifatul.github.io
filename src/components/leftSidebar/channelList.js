import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"
import Style from "./leftSidebar.module.scss"
import { useStore } from '../../store';
import { IMAGE_COLOR } from "../../constants/index"

const ChannelList = () => {
  const channels = [
    {
      label: "Projects",
      imgSrc: `https://img.icons8.com/sf-regular/48/${IMAGE_COLOR}/hashtag.png`,
      imgSrcDark: "https://img.icons8.com/sf-regular/48/000000/hashtag.png",

    },
    {
      imgSrc: `https://img.icons8.com/sf-regular/48/${IMAGE_COLOR}/hashtag.png`,
      imgSrcDark: "https://img.icons8.com/sf-regular/48/000000/hashtag.png",
      label: "Experiences",
    }
  ]
  const [open, setOpen] = useState(true)
  const { setActiveSidebar, activeSidebarLabel } = useStore();

  return <>
    <div className={`${Style.channelListSection} ${Style.channelList}`}>

      <ChannelLabel
        toggleOpen={() => setOpen(!open)}
        label="Channels"
        open={open}
      />
      {open && <>
        {channels.map(channel => {
          return <ChannelItem
            key={channel.label}
            {...channel}
            activeSidebarLabel={activeSidebarLabel}
            onClick={e => setActiveSidebar(channel.label, channel.imgSrcDark)}

          />
        })}
        <AddChannel label="Add channels" />
      </>}


    </div>

  </>
}
export default ChannelList