import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
const ChannelList = () => {
  const channels = [
    {
      channelName: "Hackerrank",
      imgSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",

    },
    {
      imgSrc: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
      channelName: "Github",
    },
    {
      imgSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png",
      channelName: "Leetcode",
    }
  ]
  return <>
    <div class="channelListSection appList">

      <ChannelLabel
        label="Channels"
      />
      {channels.map(channel => {
        return <ChannelItem
          {...channel}
        />
      })}
      <AddChannel label="Add apps" />

    </div>

  </>
}
export default ChannelList