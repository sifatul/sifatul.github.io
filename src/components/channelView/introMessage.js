import LinkMessage from "./singleMessage/linkMessage"
import TextMessage from "./singleMessage/textMessage"
import Style from './channelView.module.scss'

const IntroMessage = () => {

  return <>


    <TextMessage
      message="   Hello there. \n
      My name is Md Sifatul Islam. I am fullstack developer with around 4 years of experience working with react, nodejs and aws services growing startups or for venture capital company. \n
      Currently I am working as technical lead playing the role as the main
      developer to oversee all development projects. I build CI/CD pipelines
      which increased daily deploy count by 2-fold and have a proven track record of
      working with a project from planning to deployment. <br />
"
    />

    <TextMessage
      message="
      
      In terms of stack I work with NodeJs (Express/NestJs) in backend, ReactJs (NextJs) using JavaScript / TypeScript, Java for competitive programming, Docker, MongoDB or MySQL for database. I am very comfortable in working with AWS cloud services like RDS, S3, ECS, EC2 etc and hold AWS solution associate certification too."
    />
    <div className={Style.floatingTime}>
      <div className={Style.floatingTimeWrapper}>
        <button className={Style.timeCapsule}>Today</button>
      </div>
    </div>


    <LinkMessage />

  </>

}
export default IntroMessage