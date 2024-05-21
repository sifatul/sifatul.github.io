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
  {msg: "Feel free to ask me about my skills, projects, or experience.", delay: 7000}
]
const IntroMessage = () => {
  const { myInfo, users, activeSidebarItem, addNewIntroMessage, introMessages } = useStore();
  const { activeSidebarLabel, activeSidebarIcon } = activeSidebarItem; 
  const elementRef = useRef(null);
  let lastRepoTime = '';
   
  
  const [currentIndex, setCurrentIndex] = useState(0);

 


  useEffect(() => {
    
    const {msg, delay} = msgList[currentIndex] || {}
    if(!msg) return 

    

    const newMsg = { "message": msg, senderInfo: users.sifatul, delay: delay}
     
 
    setTimeout(() => {
      addNewIntroMessage(newMsg)
      setCurrentIndex(currentIndex+1)
    }, delay)

  }, [currentIndex])
  



  useEffect(() => elementRef?.current?.scrollIntoView()); 
 




  return <>
    <PersonIntro
      channelName={"activeSidebarLabel"}
      body="This is the very beginning of your direct message history with <strong>Sifatul</strong>. Only the two of you are in this conversation."
      imgSrc={MY_INFO.avatar}

    />

    {introMessages.map((msgItem, idx) => {
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


