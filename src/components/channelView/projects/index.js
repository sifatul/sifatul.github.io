import ChannelIntro from "../channelIntro"
import { MY_INFO, TERAARK_INFO } from "../../../constants"
import MoneyBrainProjects from "./moneybrain.projects"
import TeraArkProjects from "./teraark.project"


const Projects = () => {




  return <>
    {/* <LinkMessage {...blog} /> */}
    <ChannelIntro

      channelName="project"
      body="This is the very beginning of the projects channel. Here listed are the list of projects."
      imgSrc="https://img.icons8.com/sf-regular/20/000000/hashtag.png"

    />
    <MoneyBrainProjects />

    <TeraArkProjects />
  </>
}
export default Projects