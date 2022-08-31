import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"
import Style from "./leftSidebar.module.scss"
const ChannelList = () => {
  const channels = [
    {
      label: "Projects",
      imgSrc: "https://img.icons8.com/sf-regular/48/c7b7c6/hashtag.png",

    },
    {
      imgSrc: "https://img.icons8.com/sf-regular/48/c7b7c6/hashtag.png",
      label: "Experiences",
    }
  ]
  const [open, setOpen] = useState(true)
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
            key={channel.channelName}
            {...channel}
          />
        })}
        <AddChannel label="Add channels" />
      </>}


    </div>

  </>
}
export default ChannelList