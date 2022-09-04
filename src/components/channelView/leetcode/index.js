import { useEffect } from "react"
import { GetData } from "../../../helpers/httpClient.helper"
import ChannelIntro from "../channelIntro"

const LeetCodePage = () => {

  useEffect(() => {
    GetData('https://find-profile.vercel.app/api/platform/GITHUB?source=https://api.github.com/users/sifatul')
  }, [])
  return <>
    <ChannelIntro
      channelName="leetcode"
      body="This channel holds history of problems solved in https://leetcode.com/sifatul2020/."
      imgSrc="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
    />

  </>
}
export default LeetCodePage