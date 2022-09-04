import Style from './channelView.module.scss'
import Image from "../global/image"
import { textToLinkMarkup } from "../../helpers/string.helper"

const ChannelIntro = (props) => {
  const { channelName, body, imgSrc } = props
  const message = textToLinkMarkup(body)
  return <div className={`${Style.channelIntro}`}>
    <div className={`${Style.singleMessage} ${Style.channelIntro}`}>
      <div
        className={`${Style.col} `}    >
        <div className={Style.ChannelIntroIconWrapper}>
          <Image src={imgSrc} alt="hash-icon" />
        </div>

      </div>
      <div className={Style.col}>
        <div className={Style.row}>
          <span className={` ${Style.title}`} > This is the very beginning of the </span>
          <span className={` ${Style.title} isLink`} > #{channelName}  </span>
          <span className={` ${Style.title}`} > channel </span>
        </div>
        <div

          className={`${Style.row} ${Style.message}`}
          dangerouslySetInnerHTML={{ __html: message }}


        />

      </div>

    </div>

  </div>
}
export default ChannelIntro