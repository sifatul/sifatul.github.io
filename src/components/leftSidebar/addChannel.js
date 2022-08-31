const ChannelItem = (props) => {
  const { label } = props
  return <>
    <div class="channel-item">
      <img class="channel-icon" src="https://img.icons8.com/ios/50/c7b7c6/plus-math.png" alt="hash-icon" />
      <span class="channel name"> {label}</span>
    </div>
  </>
}
export default ChannelItem