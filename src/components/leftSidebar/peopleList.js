import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState, useEffect } from "react"
import Style from "./leftSidebar.module.scss"
import { useStore } from '../../store';
import { MY_INFO } from "../../constants/index"
import { GetData } from '../../helpers/httpClient.helper';

export const peopleArr = [
  {
    label: MY_INFO.name,
    imgSrc: MY_INFO.avatar,

  }
]
const ChannelList = () => {

  const [open, setOpen] = useState(true)
  const { setActiveSidebar, activeSidebarItem, sifatulInfo, myInfo } = useStore();

  const { activeSidebarLabel } = activeSidebarItem

  const [senders, setSenders] = useState([sifatulInfo])
  useEffect(() => {
    if (!myInfo) return
    setSenders([sifatulInfo, myInfo])

  }, [myInfo])






  return <>
    <div className={`${Style.channelListSection} ${Style.peopleList}`}>


      <ChannelLabel
        toggleOpen={() => setOpen(!open)}
        open={open}
        label="Direct messages"
      />

      {open && <>
        {senders.map(channel => {
          const { name: label } = channel
          return <ChannelItem
            key={label}
            label={label}
            {...channel}
            active={activeSidebarLabel === label}
            onClick={e => setActiveSidebar(label, channel.imgSrc)}
          />
        })}
        <AddChannel label="Add teammates" />
      </>}

    </div>

  </>
}
export default ChannelList