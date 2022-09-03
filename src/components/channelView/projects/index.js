import TextMessage from "../singleMessage/textMessage"
import LinkMessage from "../singleMessage/linkMessage"
import data from "./projectList.json"
import ChannelIntro from "../channelIntro"
import { MY_INFO, TERAARK_INFO } from "../../../constants"
import MoneyBrainProjects from "./moneybrain.projects"


const Projects = () => {

  const { blog, teracomix, pointAvenue } = data
  const senderInfo = {
    senderAvatar: MY_INFO.avatar,
    senderName: MY_INFO.name,
  }
  const senderTeraArk = {
    senderAvatar: TERAARK_INFO.avatar,
    senderName: TERAARK_INFO.name,
  }
  return <>
    {/* <LinkMessage {...blog} /> */}
    <ChannelIntro

      channelName="project"
      body="This is the very beginning of the projects channel. Here listed are the list of projects."
      imgSrc="https://img.icons8.com/sf-regular/20/000000/hashtag.png"

    />
    <MoneyBrainProjects />

    <TextMessage
      message={"was added to #experiences by Sifatul."}
      senderInfo={senderTeraArk}
    />
    <LinkMessage {...pointAvenue}
      message="An integrated platform of LMS, CMS, and Live Class to provide classroom-as-a-service."
      senderInfo={senderTeraArk}

    />
    <LinkMessage {...teracomix}
      message="Online comics platform to teach English to kids."
      senderInfo={senderTeraArk}


    />
  </>
}
export default Projects