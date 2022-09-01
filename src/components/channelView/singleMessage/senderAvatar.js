import Style from '../channelView.module.scss'

const SenderAvatar = () => {
  return <>
    <div className={`${Style.col} ${Style.avatarContainer}`}>
      <img src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="avatar" />
    </div>
  </>
}
export default SenderAvatar