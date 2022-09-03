import MessageWrapper from '../../../Hoc/messageWrapper'
import Style from '../channelView.module.scss'
import Image from "../../global/image"
const LinkMessage = (props) => {
  const { link, previewImage, platformName, title, description, message, favicon, senderInfo } = props

  const clickRouteHandler = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
  return <MessageWrapper {...senderInfo}>


    {message}
    <div className={`isLink`}>
      <a className={`isLink`} href={link}>{link}</a>
    </div>
    <div className={Style.colWrapper}>
      <div className={Style.borderLeft}></div>
      <div className={Style.metaContainer}>

        <div className={Style.metaLogoSiteName}>
          {favicon && <Image src={favicon} alt="logo-icon" />}
          <span className={Style.metaName}>{platformName}</span>
        </div>
        <div className={`hasLink isLink ${Style.linkTitle}`} onClick={clickRouteHandler}>
          {title}
        </div>
        <div className={Style.description}>
          {description}
        </div>
        <div className={Style.previewImage}>
          <Image src={previewImage} alt="link-preview" />
        </div>
      </div>
    </div>


  </MessageWrapper>
}
export default LinkMessage