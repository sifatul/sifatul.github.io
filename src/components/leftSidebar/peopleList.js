import AddChannel from "./addChannel"
import ChannelLabel from "./labelChannel"
import ChannelItem from "./channelItem"
const ChannelList = () => {
  const channels = [
    {
      channelName: "Sifatul Islam",
      imgSrc: "https://avatars.githubusercontent.com/u/10746740?v=4",

    }
  ]
  return <>
    <div class="channelListSection peopleList">

      <ChannelLabel
        label="Direct messages"
      />
      {channels.map(channel => {
        return <ChannelItem
          {...channel}
        />
      })}
      <AddChannel label="Add teammates" />

    </div>

  </>
}
export default ChannelList