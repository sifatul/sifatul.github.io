import { useEffect, useRef } from "react";
import { MY_INFO } from "../../../constants";
import { timeFormat } from "../../../helpers/messageHelper";
import { useStore } from '../../../store';
import PersonIntro from "../personIntro";
import TextMessage from "../singleMessage/textMessage";
import TimeCapsule from "../singleMessage/timeCapsule";
const IntroMessage = () => {
  const { activeSidebarItem, addNewIntroMessage, introMessages, updateUnseenMsg, unseenMessages } = useStore();
  const { activeSidebarLabel } = activeSidebarItem; 
  const elementRef = useRef(null);
  let lastRepoTime = '';

  useEffect(() => elementRef?.current?.scrollIntoView()); 


  useEffect(()=>{
    if(!unseenMessages.length) return
     
    const unseenMsg1 = unseenMessages[0]

    addNewIntroMessage({...unseenMsg1})
    const timeout = setTimeout(() => {
      updateUnseenMsg(unseenMessages.slice(1))
    }, unseenMsg1.delay)
    return () => clearTimeout(timeout);

  },[unseenMessages.length])

  return <>
    <PersonIntro
      channelName={activeSidebarLabel}
      body="This is the very beginning of your direct message history with <strong>Sifatul</strong>. Only the two of you are in this conversation."
      imgSrc={MY_INFO.avatar}

    />

    {introMessages.map((msgItem, idx) => {
      const { message, time: created_at, senderInfo = {}, isSeen=false } = msgItem
      let time = timeFormat(created_at)
      const showTime = lastRepoTime !== time;
      lastRepoTime = time;
      return <div key={idx} ref={elementRef}>
        {showTime && <TimeCapsule time={time} />}
        <TextMessage
          message={message}
          senderInfo={senderInfo}
          created_at={created_at}
          isSeen={isSeen}
        />
      </div>
    })}
  </>

}
export default IntroMessage


