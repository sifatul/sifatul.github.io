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
        return <div key={item.time}>

          {item.time && <TimeCapsule time={item.time} />}
          {item.msg && <TextMessage message={item.msg} />}
        </div>
      })


    }
    )}





    {/* <LinkMessage {...pointAvenue} /> */}
  </>
}
export default Projects