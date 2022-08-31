import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"

const ChannelList = () => {
  const channels = [
    {
      channelName: "Sifatul Islam",
      imgSrc: "https://avatars.githubusercontent.com/u/10746740?v=4",

    }
  ]
  const [open, setOpen] = useState(true)

  return <>
    <div class="channelListSection peopleList">

      <ChannelLabel
        toggleOpen={() => setOpen(!open)}
        open={open}
        label="Direct messages"
      />

      {open && <>
        {channels.map(channel => {
          return <ChannelItem
            {...channel}
          />
        })}
        <AddChannel label="Add teammates" />
      </>}

    </div>

  </>
}
export default ChannelList