import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MY_INFO } from "../../../constants";
import { mapUsersAndMessage, timeFormat } from "../../../helpers/messageHelper";
import RealtimeDatabaseManage from "../../../hooks/RealtimeDatabase";
import { useStore } from '../../../store';
// import IntroDefaultData from "../intro/introTexts.json";
import PersonIntro from "../personIntro";
import TextMessage from "../singleMessage/textMessage";
import TimeCapsule from "../singleMessage/timeCapsule";
const askEmailText = "<p>Feel free to leave a message and come back later to follow up with this conversation. \\n You may also leave your email address. </p>"

const msgList = [
  {msg: "<div class=\"block\">Hello there!</div>\n<div class=\"block\">My name is <b>Md Sifatul Islam</b>. I have been working as a fullstack developer for around 5 years.</div>", delay: 0},
  {msg: "For years, I've crafted scalable user-centric apps with Next.js and React.<div>I specialize in building modern web applications using technologies like Next.js, React, Node.js, and more.</div>", delay: 8000},
  {msg: "Let me leverage my expertise to build a robust and intuitive web solution for you.", delay: 7000},
  {msg: "Feel free to ask me about my skills, projects, or experience.", delay: 8000}
]
const IntroMessage = () => {
  const { myInfo, users, activeSidebarItem } = useStore();
  const { activeSidebarLabel, activeSidebarIcon } = activeSidebarItem;

  const { databaseListener, allMessageListener } = RealtimeDatabaseManage()
  const elementRef = useRef(null);
  let lastRepoTime = '';
  const [messages, addNewIntroMessage] = useState([])
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const sendEmailRequestMessage = useCallback(() => {
    const newMessage = {
      message: askEmailText,
      time: new Date().toISOString(),
    }
    const formatted = mapUsersAndMessage(users, [newMessage])
    setTimeout(() => {
      addNewIntroMessage(prev => [...prev, ...formatted])
    }, 1000)

  }, [])


  useEffect(() => {
    
    const {msg, delay} = msgList[currentIndex] || {}
    if(!msg) return
    const IntroDefaultData = [  { "message": msg }]

    
    const formatted = mapUsersAndMessage(users, IntroDefaultData)
    console.log("formatted", formatted)
    // addNewIntroMessage(prev => [...prev, ...formatted])
    setTimeout(() => {
      addNewIntroMessage(prev => [...prev, ...formatted])
      setCurrentIndex(currentIndex+1)
    }, delay)

  }, [currentIndex])
  



  useEffect(() => elementRef?.current?.scrollIntoView());
  const userMessageHandler = useCallback(() => {
    if (myInfo.name == activeSidebarLabel) return

    const callback = (data) => {
      const { message, created_at, sender } = data
      const newMessage = {
        message,
        time: created_at,
        sender
      }
      const formatted = mapUsersAndMessage(users, [newMessage])
      addNewIntroMessage(prev => [...prev, ...formatted])


    }
    databaseListener(null, callback)

  }, [myInfo, messages, activeSidebarLabel])

  const allMessageHandler = useCallback(async () => {

    const data = await allMessageListener()

    const userList = [];

    for (let user in data) {
      userList.push(data[user])
    }
    const arr = [];
    userList.map(item => {
      for (let keys in item) {
        arr.push(item[keys])
      }
    })

    const formatted = mapUsersAndMessage(users, arr)


    addNewIntroMessage(prev => [...prev, ...formatted])

  }, [messages, users])




  // useEffect(() => {
  //   userMessageHandler()
  //   // if (isAdmin) allMessageHandler()
  // }, [])


  // const blogLink = {
  //   link: "https://dev.to/sifatul/create-package-in-github-registry-51p9",
  //   previewImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--VC0V3bMa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a3t917ikhl3szi5lff1a.png",
  //   platformName: "DEV Community",
  //   title: "Simple guide to create package in Github registry",
  //   description: "Creating a package in the GitHub registry is very simple. Firstly package.json needs to be updated;... (32 kB)",
  //   message: "you can checkout my blog too. Here is a good article to start with.",
  //   favicon: "https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png",
  // }




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


