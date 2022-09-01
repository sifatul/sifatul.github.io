import SenderInfo from './senderInfo'
import Style from '../channelView.module.scss'
import SenderAvatar from './senderAvatar'
const LinkMessage = (props) => {
  const { link, previewImage, platformName, title, description, message, favicon, } = props

  const clickRouteHandler = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
  return <>
    <div className={Style.singleMessage}>
      <SenderAvatar />
      <div className={Style.col}>
        <SenderInfo />
        <div
          className={`${Style.row} ${Style.message}`}
        >
          {message}
          <div className={`.hasLink ${Style.link}`}>
            <a href={link}>{link}</a>
          </div>
          <div className={Style.colWrapper}>
            <div className={Style.borderLeft}></div>
            <div className={Style.metaContainer}>

              <div className={Style.metaLogoSiteName}>
                <img src={favicon} alt="logo-icon" />
                <span className={Style.metaName}>{platformName}</span>
              </div>
              <div className={`hasLink ${Style.linkTitle}`} onClick={clickRouteHandler}>
                {title}
              </div>
              <div className={Style.description}>
                {description}
              </div>
              <div className={Style.previewImage}>
                <img src={previewImage} alt="link-preview" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </>
}
export default LinkMessage