import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"
import Style from "./leftSidebar.module.scss"
import { useStore } from '../../store';
import GithubImg from "../../github.svg"
import LeetcodeImg from "../../leetcodeImg.png"


export const apps = [
  {
    imgSrc: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
    imgSrcDark: GithubImg,
    label: "Github",
  },

]
const ChannelList = () => {

  const [open, setOpen] = useState(true)
  const { setActiveSidebar, activeSidebarItem } = useStore();
  const { activeSidebarLabel } = activeSidebarItem



  return <>
    <div className={`${Style.channelListSection} ${Style.appList}`}>


      <ChannelLabel
        toggleOpen={() => setOpen(!open)}
        open={open}

        label="Apps"
      />
      {open && <>
        {apps.map(channel => {
          const imgSrc = channel.imgSrcDark || channel.imgSrc
          return <ChannelItem
            key={channel.label}

            {...channel}
            active={activeSidebarLabel === channel.label}
            onClick={e => setActiveSidebar(channel.label, imgSrc)}
          />
        })}
        <AddChannel label="Add apps" />
      </>}


    </div>

  </>
}
export default ChannelList