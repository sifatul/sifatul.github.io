import { useEffect, useCallback, useState, useRef } from "react";
import { useStore } from '../../store';
import PersonIntro from "./personIntro";
import RealtimeDatabaseManage from "../../hooks/RealtimeDatabase";
import { useMemo } from "react";
import { mapUsersAndMessage, timeFormat } from "../../helpers/messageHelper";
import TimeCapsule from "./singleMessage/timeCapsule";
import TextMessage from "./singleMessage/textMessage";





const GuestPage = () => {
  const { activeSidebarItem, myInfo, users } = useStore();
  const elementRef = useRef(null);
  const { activeSidebarLabel, activeSidebarIcon } = activeSidebarItem;
  const [messages, setMessage] = useState([])
  const [userInfo, setUserInfo] = useState(null)
  let lastRepoTime = '';

  const { databaseListener } = RealtimeDatabaseManage()

  useEffect(() => {
    const key = Object.keys(users).find(userId => users[userId].name === activeSidebarLabel)
    const singleUser = users[key]
    setUserInfo(singleUser)
    setMessage([])

  }, [])


  const userMessageHandler = useCallback(() => {
    if (!userInfo) return

    const callback = (data) => {

      const { message, created_at, sender } = data
      const newMessage = {
        message,
        time: created_at,
        sender
      }
      mapUsersAndMessage(users, [newMessage]);
      setMessage(prev => [...prev, newMessage])


    }
    databaseListener(userInfo.userId, callback)

  }, [userInfo, users])

  useEffect(() => {
    if (activeSidebarLabel == myInfo.name) return
    return userMessageHandler()
  }, [userInfo])


  return <>
    <PersonIntro
      channelName={activeSidebarLabel}
      body="This is your space but please bear in mind this page is just made to keep sync with the Slack UI and does not have any functional value in this project."
      imgSrc={activeSidebarIcon}

    />
    {messages.map((msgItem, idx) => {
      const { message, time: created_at, senderInfo = {} } = msgItem
      let time = timeFormat(created_at)
      const showTime = lastRepoTime !== time;
      lastRepoTime = time;
      return <div key={idx + activeSidebarLabel} ref={elementRef}>
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
export default GuestPage