import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"
const ChannelList = () => {
  const channels = [
    {
      channelName: "Projects",
      imgSrc: "https://img.icons8.com/sf-regular/48/c7b7c6/hashtag.png",

    },
    {
      imgSrc: "https://img.icons8.com/sf-regular/48/c7b7c6/hashtag.png",
      channelName: "Experiences",
    }
  ]
  const [open, setOpen] = useState(true)
  return <>
    <div class="channelListSection channelList">

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