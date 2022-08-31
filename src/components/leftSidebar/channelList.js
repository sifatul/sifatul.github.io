import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
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
  return <>
    <div class="channelListSection channelList">

      <ChannelLabel
        label="Channels"
      />
      {channels.map(channel => {
        return <ChannelItem
          {...channel}
        />
      })}
      <AddChannel label="Add channels" />

    </div>

  </>
}
export default ChannelList