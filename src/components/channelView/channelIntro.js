import Style from './channelView.module.scss'

const ChannelIntro = (props) => {
  return <>
    <div className={`${Style.singleMessage} ${Style.channelIntro}`}>
      <div
        className={`${Style.col} `}    >
        <div className={Style.ChannelIntroIconWrapper}>
          <img src="https://img.icons8.com/sf-regular/20/000000/hashtag.png" alt="hash-icon" />
        </div>

      </div>
      <div className={Style.col}>
        <div className={Style.row}>
          <span className={` ${Style.title}`} > This is the very beginning of the </span>
          <span className={` ${Style.title}`} > # project channel </span>
        </div>
        <div

          className={`${Style.row} ${Style.message}`}

        >
          This is the very beginning of the experiences channel. Here listed are the companies I worked for and their respective timelines.

        </div>
      </div>

    </div>

  </>
}
export default ChannelIntro