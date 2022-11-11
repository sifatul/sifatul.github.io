import { useCallback, useEffect, useState } from "react"
import ChannelIntro from "../channelIntro"
import { slackTimelineformat } from "../../../helpers/time.helper"
import TimeCapsule from "../singleMessage/timeCapsule";
import TextMessage from "../singleMessage/textMessage";
import HackerrankSvg from "../../../hackerrank.svg"
import { GetData } from "../../../helpers/httpClient.helper"

const LeetCodePage = () => {

  const [leetCodeInfo, setLeetcodeInfo] = useState([])



  let lastRepoTime = '';



  const getLeetCodeInfo = useCallback(async () => {
    const senderInfo = {
      avatar: 'https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png',
      name: 'Leetcode',
    }
    const res = await GetData('https://codies.net/api/leetcode/find?userName=sifatul2020')



    const fundamentalCount = res.tagProblemCounts.fundamental.length
    const intermediateCount = res.tagProblemCounts.intermediate.length
    const advanceCount = res.tagProblemCounts.advanced.length

    let languageWiseMessage = '<b>Programming Language wise summary:</b> \\n'
    res.languageProblemCount.forEach(languageItem => {
      languageWiseMessage += `${languageItem.languageName}: ${languageItem.problemsSolved} \\n`
    })

    let tagWiseCount = '<b>Data structure wise summary:</b> \\n'

    res.tagProblemCounts.fundamental.forEach(fundamentalItem => {
      tagWiseCount += `${fundamentalItem.tagName}: ${fundamentalItem.problemsSolved} \\n`
    })

    const items = [
      {
        message: languageWiseMessage,
        updatedAt: res.updatedAt,
        senderInfo
      },
      {
        message:
          `<b> Difficulty wise summary: </b> \\n
          fundamental : ${fundamentalCount}\\n
          intermediate : ${intermediateCount}\\n
          advanced : ${advanceCount}\\n
          `,
        updatedAt: res.updatedAt,
        senderInfo
      },
      {
        message: tagWiseCount,
        updatedAt: res.updatedAt,
        senderInfo
      }

    ]


    setLeetcodeInfo([...leetCodeInfo, ...items])

  }, [leetCodeInfo])

  const getHackerRankInfo = useCallback(async () => {
    const senderInfo = {
      avatar: 'https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png',
      name: 'HackerRank',
    }
    const res = await GetData('https://codies.net/api/hackerrank/find?userName=sifatul')
    let languageWiseMessage = '<b>Programming Language wise summary:</b> \\n'
    res.languages.forEach(languageItem => {
      languageWiseMessage += `${languageItem[0]}: ${languageItem[1]} \\n`
    })

    const message = [

      {
        message: languageWiseMessage,
        updatedAt: res.updatedAt,
        senderInfo
      },

    ]
    setLeetcodeInfo([...leetCodeInfo, ...message])

  }, [leetCodeInfo])
  useEffect(() => {
    getLeetCodeInfo()
    getHackerRankInfo()

  }, [])
  console.log("HackerrankSvg", HackerrankSvg)
  const imgUrl = ["https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png", HackerrankSvg]
  return <>
    <ChannelIntro
      channelName="Leetcode, HackerRank"
      body="This channel holds history of problems solved in https://leetcode.com/sifatul2020/ and https://www.hackerrank.com/sifatul."
      imgSrc={imgUrl}
    />

    {leetCodeInfo.map((info, idx) => {
      const { message, updatedAt, senderInfo } = info

      const time = slackTimelineformat(updatedAt)
      let messageIntro = message
      const showTime = lastRepoTime !== time;
      lastRepoTime = time;

      return <div key={idx}>
        {showTime && <TimeCapsule time={time} />}
        <TextMessage
          message={messageIntro}
          senderInfo={senderInfo}
        />
      </div>
    })}

  </>
}
export default LeetCodePage