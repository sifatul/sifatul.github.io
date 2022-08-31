import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"
import Style from "./leftSidebar.module.scss"
export const peopleArr = [
  {
    label: "Sifatul Islam",
    imgSrc: "https://avatars.githubusercontent.com/u/10746740?v=4",

  }
]
const ChannelList = () => {

  const [open, setOpen] = useState(true)

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
          />
        })}
        <AddChannel label="Add teammates" />
      </>}

    </div>

  </>
}
export default ChannelList