import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
import { useState } from "react"
import Style from "./leftSidebar.module.scss"
import { useStore } from '../../store';


export const apps = [
  {
    imgSrc: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
    imgSrcDark: "https://img.icons8.com/ios-glyphs/30/000000/github.png",
    label: "Github",
  },
  {
    imgSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png",
    label: "Leetcode",
  },
  {
    label: "Hackerrank",
    imgSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",

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