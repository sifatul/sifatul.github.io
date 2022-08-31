import './styles/index.scss';

function App() {
  return (<body>
    <div class="container">
      <div class="workspace">
        <div class="myWorkspace">SI</div>

      </div>

      <div class="channelsPeopleWrapper">
        <div class="nameSection"> Sifatul </div>
        <div class="wrapper">

          <div class="channelListSection channelList">
            <div class="channel-item labelOnly">

              <img class="channel-icon" src="https://img.icons8.com/metro/15/c7b7c6/sort-down.png" alt="down-arrow-icon" />

              <span class="channel name"> Channels</span>
            </div>

            <div class="channel-item">
              <img class="channel-icon" src="https://img.icons8.com/sf-regular/48/c7b7c6/hashtag.png" alt="hash-icon" />
              <span class="channel name"> Projects</span>
            </div>
            <div class="channel-item">
              <img class="channel-icon" src="https://img.icons8.com/sf-regular/48/c7b7c6/hashtag.png" alt="hash-icon" />
              <span class="channel name"> Experience</span>
            </div>
            <div class="channel-item">
              <img class="channel-icon add-icon" src="https://img.icons8.com/ios/50/c7b7c6/plus-math.png" alt="hash-icon" />
              <span class="channel name"> Add channels</span>
            </div>

          </div>
          <div class="channelListSection peopleList">

            <div class="channelList">
              <div class="channel-item labelOnly">

                <img class="channel-icon" src="https://img.icons8.com/metro/15/c7b7c6/sort-down.png" alt="down-arrow-icon" />

                <span class="channel name"> Direct messages</span>
              </div>
              <div class="channel-item active">
                <img class="channel-icon" src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="hash-icon" />
                <span class="channel name"> Sifatul Islam</span>
              </div>
              <div class="channel-item">
                <img class="channel-icon add-icon" src="https://img.icons8.com/ios/50/c7b7c6/plus-math.png" alt="hash-icon" />
                <span class="channel name"> Add teammates</span>
              </div>

            </div>

          </div>
          <div class="channelListSection appList">

            <div class="channelList">
              <div class="channel-item labelOnly">

                <img class="channel-icon" src="https://img.icons8.com/metro/15/c7b7c6/sort-down.png" alt="down-arrow-icon" />

                <span class="channel name"> Apps</span>
              </div>

              <div class="channel-item ">

                <img class="channel-icon big-icon" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png" alt="hackerrank-icon" />
                <span class="channel name"> Hackerrank</span>
              </div>

              <div class="channel-item ">

                <img class="channel-icon big-icon" src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="github-icon" />
                <span class="channel name"> Github</span>
              </div>

              <div class="channel-item ">

                <img class="channel-icon big-icon" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="leetcode-icon" />
                <span class="channel name"> Leetcode</span>
              </div>
              <div class="channel-item">
                <img class="channel-icon add-icon" src="https://img.icons8.com/ios/50/c7b7c6/plus-math.png" alt="hash-icon" />
                <span class="channel name"> Add apps</span>
              </div>

            </div>

          </div>

        </div>
        <div class="channelListSection huddle">
          <div class="channel-item ">

            <img class="channel-icon" src="https://img.icons8.com/small/16/c7b7c6/radio-tower.png" alt="radio-icon" />

            <span class="channel name"> Huddle</span>
          </div>

        </div>
      </div>

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
                My name is Md Sifatul Islam. I am fullstack developer with 3+ years of years of experience working with react, nodejs and aws services for small to midium size start-ups. <br />

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

        <div class="textEditor">
          <div class="container">
            <div class="editorItemContainer">

              <img class="editorItem" src="https://img.icons8.com/material-outlined/15/cacaca/bold.png" alt="bold-icon" />
              <img class="editorItem" src="https://img.icons8.com/ios-glyphs/15/cacaca/italic.png" alt="italic-icon" />
              <img class="editorItem" src=" https://img.icons8.com/external-tal-revivo-bold-tal-revivo/15/bcbbbc/external-strikethrough-text-feature-in-word-processing-application-text-bold-tal-revivo.png" alt="strike-through-icon" />
            </div>
            <div contentEditable="true" class="textArea">

            </div>
            <div class="actionItemContainer">
              <div class="left">
                <img class="editorItem" src="https://img.icons8.com/ios/15/bcbbbc/no-video--v1.png" alt="no-video" />

                <img class="editorItem" src="https://img.icons8.com/material-outlined/15/bcbbbc/microphone.png" alt="microphone" />
              </div>

              <div class="right">

                <img class="editorItem" src="https://img.icons8.com/external-inkubators-glyph-inkubators/15/bcbbbc/external-send-ecommerce-user-interface-inkubators-glyph-inkubators.png" alt="send-icon" />
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  </body>

  );
}

export default App;
