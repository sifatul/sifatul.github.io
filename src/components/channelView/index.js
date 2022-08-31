import './index.scss'
import TextEditor from "./textEditor"
const ChannelView = () => {
  return <>

    <div class="channelView">
      <div class="nameSection">
        <img class="channel-icon big-icon" src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="profile-icon" />
        <span>Sifatul Islam </span>
      </div>

      <div class="wrapper">
        <div class="singleMessage">
          <div class="col avatarContainer">
            <img src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="hash-icon" />
          </div>
          <div class="col">
            <div class="row">
              <span class="username"> Sifatul </span>
              <span class="userMessageTime">8:06 AM</span>
            </div>
            <div class="row message">
              Hello there. <br /> <br />
                My name is Md Sifatul Islam. I am fullstack developer with around 4 years of experience working with react, nodejs and aws services growing startups or for venture capital company. <br />

                Currently I am working as technical lead playing the role as the main
                developer to oversee all development projects. I build CI/CD pipelines
                which increased daily deploy count by 2-fold and have a proven track record of
                working with a project from planning to deployment. <br />

                In terms of stack I work with NodeJs (Express/NestJs) in backend, ReactJs (NextJs) using JavaScript / TypeScript, Java for competitive programming, Docker, MongoDB or MySQL for database. I am very comfortable in working with AWS cloud services like RDS, S3, ECS, EC2 etc and hold AWS solution associate certification too.

              </div>
          </div>

        </div>
        <div class="floatingTime">
          <div class="floatingTimeWrapper">
            <button class="timeCapsule">Today</button>
          </div>
        </div>
        <div class="singleMessage">
          <div class="col avatarContainer">
            <img src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="avatar" />
          </div>
          <div class="col">
            <div class="row">
              <span class="username"> Sifatul </span>
              <span class="userMessageTime">8:06 AM</span>
            </div>
            <div class="row message">
              This portfolio is made for fun to combinely present all my skills. Here is just the begining.
              </div>
          </div>

        </div>
        <div class="singleMessage">
          <div class="col avatarContainer">
            <img src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="avatar" />
          </div>
          <div class="col">
            <div class="row">
              <span class="username"> Sifatul </span>
              <span class="userMessageTime">8:06 AM</span>
            </div>
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
      </div>
      <TextEditor />
    </div>

  </>

}
export default ChannelView