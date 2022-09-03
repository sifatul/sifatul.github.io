import { MONEYBRAIN_INFO } from "../../../constants"
import TextMessage from "../singleMessage/textMessage"
import LinkMessage from "../singleMessage/linkMessage"
import data from "./projectList.json"

const MoneyBrainProjects = () => {
  const { speakNow, AIStudios } = data

  const senderMoneyBrain = {
    senderAvatar: MONEYBRAIN_INFO.avatar,
    senderName: MONEYBRAIN_INFO.name,
  }
  return <>

    <TextMessage
      message={"was added to #experiences by Sifatul."}
      senderInfo={senderMoneyBrain} />
    <LinkMessage {...speakNow}
      message="AI-based web platform to teach English, Chinese or Japanese through reading, listening, and speaking. "
      senderInfo={senderMoneyBrain} />
    <LinkMessage {...AIStudios}
      message="An online platform to make AI-based video from text."
      senderInfo={senderMoneyBrain} />


  </>
}
export default MoneyBrainProjects