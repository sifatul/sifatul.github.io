import Style from "./leftSidebar.module.scss"

const ChannelItem = (props) => {
  const { label } = props
  return <>
    <div className={`${Style.channelItem} ${Style.hasLink}`}>
      <img className={Style.channelIcon} src="https://img.icons8.com/ios/50/c7b7c6/plus-math.png" alt="hash-icon" />
      <span > {label}</span>
    </div>
  </>
}
export default ChannelItem