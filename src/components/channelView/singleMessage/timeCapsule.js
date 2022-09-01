import Style from '../channelView.module.scss'

const TimeCapsule = ({ time }) => {

  return <div className={Style.floatingTime}>
    <div className={Style.floatingTimeWrapper}>
      <button className={Style.timeCapsule}>{time}</button>
    </div>
  </div>
}
export default TimeCapsule