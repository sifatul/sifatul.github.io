import TextMessage from "../singleMessage/textMessage"
import LinkMessage from "../singleMessage/linkMessage"
import data from "./projectList.json"
import ChannelIntro from "../channelIntro"
import { MY_INFO } from "../../../constants"

const Projects = () => {

  const { blog, teracomix, pointAvenue } = data
  const senderInfo = {
    senderAvatar: MY_INFO.avatar,
    senderName: MY_INFO.name,
  }
  return <>
    {/* <LinkMessage {...blog} /> */}
    <ChannelIntro

      channelName="project"
      body="This is the very beginning of the projects channel. Here listed are the list of projects."
      imgSrc="https://img.icons8.com/sf-regular/20/000000/hashtag.png"

    />
    <LinkMessage {...teracomix}
      senderInfo={senderInfo}


    />
    <LinkMessage {...pointAvenue}
      senderInfo={senderInfo}

    />
  </>
}
export default Projects