import LinkMessage from "./singleMessage/linkMessage"
import SenderInfo from "./singleMessage/senderInfo"

const IntroMessage = () => {

  return <>

    <div class="singleMessage">
      <div class="col avatarContainer">
        <img src="https://avatars.githubusercontent.com/u/10746740?v=4" alt="hash-icon" />
      </div>
      <div class="col">
        <SenderInfo />
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
        <SenderInfo />
        <div class="row message">
          This portfolio is made for fun to combinely present all my skills. Here is just the begining.
              </div>
      </div>

    </div>

    <LinkMessage />

  </>

}
export default IntroMessage