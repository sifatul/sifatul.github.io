import MessageWrapper from '../../../Hoc/messageWrapper'
import Style from '../channelView.module.scss'
const LinkMessage = (props) => {
  const { link, previewImage, platformName, title, description, message, favicon, senderInfo } = props

  const clickRouteHandler = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
  return <MessageWrapper {...senderInfo}>


    {message}
    <div className={`.hasLink ${Style.link}`}>
      <a href={link}>{link}</a>
    </div>
    <div className={Style.colWrapper}>
      <div className={Style.borderLeft}></div>
      <div className={Style.metaContainer}>

        <div className={Style.metaLogoSiteName}>
          {favicon && <img src={favicon} alt="logo-icon" />}
          <span className={Style.metaName}>{platformName}</span>
        </div>
        <div className={`hasLink isLink ${Style.linkTitle}`} onClick={clickRouteHandler}>
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


  </MessageWrapper>
}
export default LinkMessage