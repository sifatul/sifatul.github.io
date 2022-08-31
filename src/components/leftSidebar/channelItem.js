const ChannelItem = (props) => {
  const { channelName, imgSrc } = props
  return <>
    <div class="channel-item hasLink">
      <img class="channel-icon add-icon" src={imgSrc} alt={channelName} />
      <span class="channel name"> {channelName}</span>
    </div>
  </>
}
export default ChannelItem