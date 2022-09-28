import Style from './channelView.module.scss'
import Image from "../global/image"
import { textToLinkMarkup } from "../../helpers/string.helper"

const PersonIntro = (props) => {
  const { channelName, body, imgSrc } = props
  const message = textToLinkMarkup(body)
  return <div className={`${Style.channelIntro}`}>
    <div className={`${Style.singleMessage} ${Style.channelIntro}`} style={{ flexDirection: 'column' }}>
      <div
        className={`${Style.col} `}    >
        <div className={Style.ChannelIntroIconWrapper} style={{ height: 80, width: 80 }}>
          <Image src={imgSrc} alt="hash-icon" />
        </div>

      </div>
      <div className={Style.col}>

        <div
          style={{ color: 'black' }}

          className={`${Style.row} ${Style.message}`}
          dangerouslySetInnerHTML={{ __html: message }}


        />

      </div>

    </div>

  </div>
}
export default PersonIntro