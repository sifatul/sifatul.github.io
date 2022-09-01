import SenderInfo from './senderInfo'
import Style from '../channelView.module.scss'

const LinkMessage = () => {
  return <>
    <div className={Style.singleMessage}>
      <div className={`${Style.col} ${Style.avatarContainer}`}>
        <img src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="avatar" />
      </div>
      <div className={Style.col}>
        <SenderInfo />
        <div
          className={`${Style.row} ${Style.message}`}
        >
          you can checkout my blog too. Here is a good article to start with.
                <div className={`.hasLink ${Style.link}`}>
            <a href="https://dev.to/sifatul/create-package-in-github-registry-51p9">https://dev.to/sifatul/create-package-in-github-registry-51p9</a>
          </div>
          <div className={Style.colWrapper}>
            <div className={Style.borderLeft}></div>
            <div className={Style.metaContainer}>

              <div className={Style.metaLogoSiteName}>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" alt="logo-icon" />
                <span className={Style.metaName}>DEV Community</span>
              </div>
              <div className={`hasLink ${Style.linkTitle}`}>
                Simple guide to create package in Github registry
                    </div>
              <div className={Style.description}>
                Creating a package in the GitHub registry is very simple. Firstly package.json needs to be updated;... (32 kB)
                    </div>
              <div className={Style.previewImage}>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--VC0V3bMa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a3t917ikhl3szi5lff1a.png" alt="link-preview" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </>
}
export default LinkMessage