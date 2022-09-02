import TextMessage from "../singleMessage/textMessage"
import LinkMessage from "../singleMessage/linkMessage"
import Companies from "./experienceList.json"
import TimeCapsule from "../singleMessage/timeCapsule"
import ChannelIntro from "../channelIntro"

const Projects = () => {






  return <>
    {/* <LinkMessage {...blog} /> */}
    <ChannelIntro />


    {Companies.map((company, idx) => {

      const { messages } = company

      return messages.map(item => {
        return <>

          {item.time && <TimeCapsule time={item.time} />}
          {item.msg && <TextMessage message={item.msg} />}
        </>
      })


    }
    )}





    {/* <LinkMessage {...pointAvenue} /> */}
  </>
}
export default Projects