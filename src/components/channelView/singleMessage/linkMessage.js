import SenderInfo from './senderInfo'
const LinkMessage = () => {
  return <>
    <div class="singleMessage">
      <div class="col avatarContainer">
        <img src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="avatar" />
      </div>
      <div class="col">
        <SenderInfo />
        <div class="row message">
          you can checkout my blog too. Here is a good article to start with.
                <div class="link">
            <a href="https://dev.to/sifatul/create-package-in-github-registry-51p9">https://dev.to/sifatul/create-package-in-github-registry-51p9</a>
          </div>
          <div class="colWrapper">
            <div class="borderLeft"></div>
            <div class="metaContainer">

              <div class="metaLogoSiteName">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" alt="logo-icon" />
                <span class="metaName">DEV Community</span>
              </div>
              <div class="linkTitle">
                Simple guide to create package in Github registry
                    </div>
              <div class="description">
                Creating a package in the GitHub registry is very simple. Firstly package.json needs to be updated;... (32 kB)
                    </div>
              <div class="previewImage">
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