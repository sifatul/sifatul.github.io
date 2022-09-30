import { useEffect, useState, useRef, useMemo } from "react";
import { MY_INFO } from "../../../constants";
import { slackTimelineformat } from "../../../helpers/time.helper";
import RealtimeDatabaseManage from "../../../hooks/RealtimeDatabase";
import { useStore } from '../../../store';
import IntroDefaultData from "../intro/introTexts.json";
import PersonIntro from "../personIntro";
import TextMessage from "../singleMessage/textMessage";
import TimeCapsule from "../singleMessage/timeCapsule";

const IntroMessage = () => {


  const { introMessages, myInfo, addNewIntroMessage, users } = useStore();
  const [firstMsg, setFirstMsg] = useState('')
  const { databaseListener } = RealtimeDatabaseManage()
  const elementRef = useRef(null);
  let lastRepoTime = '';


  const defaultFormattedMsg = useMemo(() => {
    return mapUsersAndMessage(users, IntroDefaultData)
  }, [])
  const messages = useMemo(() => {
    console.log("introMessages: ", introMessages)
    const formatted = mapUsersAndMessage(users, introMessages);
    console.log("formatted: ", formatted)
    return [...defaultFormattedMsg, ...formatted]
  }, [introMessages, defaultFormattedMsg, users])


  useEffect(() => elementRef.current.scrollIntoView());

  useEffect(() => {
    if (!myInfo) return
    const callback = (data) => {
      console.log("callback: ", data)
      const { text, created_at, sender } = data
      addNewIntroMessage({
        message: text,
        time: created_at,
        sender
      })


    }
    databaseListener(callback)

  }, [myInfo])


  const blogLink = {
    link: "https://dev.to/sifatul/create-package-in-github-registry-51p9",
    previewImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--VC0V3bMa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a3t917ikhl3szi5lff1a.png",
    platformName: "DEV Community",
    title: "Simple guide to create package in Github registry",
    description: "Creating a package in the GitHub registry is very simple. Firstly package.json needs to be updated;... (32 kB)",
    message: "you can checkout my blog too. Here is a good article to start with.",
    favicon: "https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png",
  }

  console.log("messages", messages)

  return <>
    <PersonIntro
      channelName={"activeSidebarLabel"}
      body="This is the very beginning of your direct message history with <strong>Sifatul</strong>. Only the two of you are in this conversation."
      imgSrc={MY_INFO.avatar}

    />

    {messages.map((msgItem, idx) => {
      const { message, time: created_at, senderInfo = {} } = msgItem
      let time = timeFormat(created_at)
      const showTime = lastRepoTime !== time;
      lastRepoTime = time;
      return <div key={idx} ref={elementRef}>
        {showTime && <TimeCapsule time={time} />}
        <TextMessage
          message={message}
          senderInfo={senderInfo}
          created_at={created_at}
        />
      </div>
    })}
  </>

}
export default IntroMessage

function timeFormat(created_at) {
  let time = created_at ? slackTimelineformat(created_at) : ''
  const today = slackTimelineformat(new Date().toISOString())
  if (time == today) time = "Today"
  return time
}
function mapUsersAndMessage(users, message) {
  const updateMessages = message.map(singleMessage => {
    const { sender: senderUserId } = singleMessage
    if (!senderUserId) {
      singleMessage.senderInfo = users.sifatul
    } else {
      singleMessage.senderInfo = users[senderUserId]
    }
    return singleMessage
  })
  return updateMessages


}