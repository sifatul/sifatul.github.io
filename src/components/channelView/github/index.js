import { useEffect, useMemo, useState } from "react"
import ChannelIntro from "../channelIntro"
import TextMessage from "../singleMessage/textMessage"
import TimeCapsule from "../singleMessage/timeCapsule"
import { GetData } from "../../../helpers/httpClient.helper"
import { slackTimelineformat } from "../../../helpers/time.helper"
import GithubRepos from "./githubData.json"
import GithubImg from "../../../github.svg"


const GithubPage = () => {
  const [repos, setRepos] = useState(GithubRepos)
  let lastRepoTime = '';
  useEffect(() => {
    try {
      GetData('https://api.github.com/users/sifatul/repos').then(data => {
        if (!data || data.length <= 0) return
        setRepos(data)

      })
    } catch (e) {
      console.error(e)
    }

  }, [])
  const senderInfo = {
    avatar: GithubImg,
    name: 'Github',
  }
  const reposSorted = useMemo(() => {

    return repos.sort((a, b) => {
      return new Date(a.created_at) - new Date(b.created_at)
    })
  }, [repos])



  return <>

    <ChannelIntro
      channelName="github"
      body="This channel holds history of projects created in https://github.com/sifatul."
      imgSrc={[GithubImg]}
    />

    {reposSorted.sort().map(repo => {
      const { full_name, owner, created_at, html_url, description, homepage } = repo;
      const ownerName = owner.login
      const time = slackTimelineformat(created_at)
      let messageIntro = `a new repository named ${full_name} is created by ${ownerName}.`
      let messageLinks = ''
      // if (description) messageIntro += `\\nDescription: ${description}.`
      if (html_url) messageLinks += `\\n repository link: ${html_url}.`
      if (homepage) messageLinks += `\\nDemo: ${homepage}.`
      const showTime = lastRepoTime !== time;
      lastRepoTime = time;
      return <div key={full_name}>
        {showTime && <TimeCapsule time={time} />}
        <TextMessage
          message={messageIntro}
          senderInfo={senderInfo}
        />
        {description && <TextMessage
          message={`${full_name} is ${description}`}
          senderInfo={senderInfo}
        />}
        <TextMessage
          message={messageLinks}
          senderInfo={senderInfo}
        />
      </div>
    })}
  </>
}
export default GithubPage