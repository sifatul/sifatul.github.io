import TextMessage from "../singleMessage/textMessage"
import LinkMessage from "../singleMessage/linkMessage"
import data from "./projectList.json"
const Projects = () => {

  console.log(Object.keys(data))
  const { blog, teracomix, pointAvenue } = data
  return <>
    {/* <LinkMessage {...blog} /> */}
    <LinkMessage {...teracomix} />
    <LinkMessage {...pointAvenue} />
  </>
}
export default Projects