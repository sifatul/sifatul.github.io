import { MY_INFO } from "../../../constants";
import { useStore } from '../../../store';
import TextMessage from "../singleMessage/textMessage";
import TimeCapsule from "../singleMessage/timeCapsule";
import TextEditor from "../textEditor/textEditor";
import PersonIntro from "../personIntro"
import { useEffect, useState } from "react";
import IntroDefaultData from "../intro/introTexts.json"
import { getDatabase, ref, onValue } from "firebase/database";
import RealtimeDatabaseManage from "../../../hooks/RealtimeDatabase";

const IntroMessage = () => {


  const { introMessages, myInfo, addNewIntroMessage } = useStore();
  const [firstMsg, setFirstMsg] = useState('')
  const { databaseListener } = RealtimeDatabaseManage()
  console.log("introMessages: ", introMessages)


  const [messages, setMessage] = useState(IntroDefaultData)
  useEffect(() => {
    setMessage([...IntroDefaultData, ...introMessages])
  }, [introMessages.length])

  useEffect(() => {
    if (!myInfo) return
    const callback = (data) => {
      console.log("callback: ", data)
      addNewIntroMessage({
        message: data.text,
        senderInfo: {
          senderAvatar: myInfo.imgSrc,
          senderName: myInfo.name,
        }
      })


    }
    databaseListener(callback)

  }, [myInfo])

  // useEffect(() => {
  //   if (!firstMsg) return
  //   const hasEmail = checkIfEmailInString(firstMsg)
  //   if (hasEmail) return
  //   const timer = setTimeout(() => {
  //     addNewIntroMessage({
  //       message: askEmailText,
  //       senderInfo: {
  //         senderAvatar: sifatulInfo.imgSrc,
  //         senderName: sifatulInfo.name,
  //       }
  //     })
  //   }, 1000)

  //   return () => {
  //     clearTimeout(timer);
  //   };


  // }, [firstMsg])






  const blogLink = {
    link: "https://dev.to/sifatul/create-package-in-github-registry-51p9",
    previewImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--VC0V3bMa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a3t917ikhl3szi5lff1a.png",
    platformName: "DEV Community",
    title: "Simple guide to create package in Github registry",
    description: "Creating a package in the GitHub registry is very simple. Firstly package.json needs to be updated;... (32 kB)",
    message: "you can checkout my blog too. Here is a good article to start with.",
    favicon: "https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png",
  }

  const MyInfo = {
    senderAvatar: MY_INFO.avatar,
    senderName: MY_INFO.name,
  }
  return <>
    <PersonIntro
      channelName={"activeSidebarLabel"}
      body="This is the very beginning of your direct message history with <strong>Sifatul</strong>. Only the two of you are in this conversation."
      imgSrc={MY_INFO.avatar}

    />
    {messages.map((msgItem, idx) => {
      const { message, time, senderInfo = MyInfo } = msgItem
      return <div key={idx}>
        {time && <TimeCapsule time={time} />}
        <TextMessage

          message={message}
          senderInfo={senderInfo}
        />
      </div>
    })}
  </>

}
export default IntroMessage