import { MONEYBRAIN_INFO } from "../../../constants"
import TextMessage from "../singleMessage/textMessage"
import LinkMessage from "../singleMessage/linkMessage"
import data from "./projectList.json"
import TimeCapsule from "../singleMessage/timeCapsule"

const MoneyBrainProjects = () => {
  const { speakNow, AIStudios } = data

  const senderMoneyBrain = {
    senderAvatar: MONEYBRAIN_INFO.favicon,
    senderName: MONEYBRAIN_INFO.name,
  }
  return <>

    <TextMessage
      message={"was added to #experiences by Sifatul."}
      senderInfo={senderMoneyBrain} />
    <TimeCapsule time={"January 2020"} />
    <LinkMessage {...speakNow}
      message="AI-based web platform to teach English, Chinese or Japanese through reading, listening, and speaking. "
      senderInfo={senderMoneyBrain} />
    <LinkMessage {...AIStudios}
      message="An online platform to make AI-based video from text."
      senderInfo={senderMoneyBrain} />
    <TimeCapsule time={"December 2020"} />
  </>
}
export default MoneyBrainProjects