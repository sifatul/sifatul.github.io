import TextMessage from "../singleMessage/textMessage"
import LinkMessage from "../singleMessage/linkMessage"
import TimeCapsule from "../singleMessage/timeCapsule"
import data from "./projectList.json"
import { TERAARK_INFO } from "../../../constants"

const TeraArkProjects = () => {
  const { blog, teracomix, pointAvenue } = data

  const senderTeraArk = {
    senderAvatar: TERAARK_INFO.favicon,
    senderName: TERAARK_INFO.name,
  }
  return <>
    <TextMessage
      message={"was added to #experiences by Sifatul."}
      senderInfo={senderTeraArk}
    />
    <LinkMessage {...pointAvenue}
      message="An integrated platform of LMS, CMS, and Live Class to provide classroom-as-a-service."
      senderInfo={senderTeraArk}

    />
    <TimeCapsule time={"January 2022"} />
    <LinkMessage {...teracomix}
      message="Online comics platform to teach English to kids."
      senderInfo={senderTeraArk}
    />
  </>
}
export default TeraArkProjects