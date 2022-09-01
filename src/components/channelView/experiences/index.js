import TextMessage from "../singleMessage/textMessage"
import LinkMessage from "../singleMessage/linkMessage"
import data from "./projectList.json"
import TimeCapsule from "../singleMessage/timeCapsule"

const Projects = () => {

  console.log(Object.keys(data))
  const { blog, teracomix, pointAvenue } = data

  const companies = [{
    name: "Durbar",
    startTime: "October 2015",
    quitTime: "April 2016",
    title: "Fullstack developer",
    startResponsibility: "Responsible to develop large scale government projects and multiple  outsourced projects using in PHP(CodeIgniter), and MySQL. ",
    quitReason: "left Durbar in preparation of thesis and final semester at BRAC University."
  },

  {
    name: "MGH group",
    startTime: "September 2018",
    quitTime: "February 2019",
    title: "Android developer at OBHAI",
    startResponsibility: "Responsibilites include Frontend development in JAVA, new features  like digital payment, Firebase notifications etc. implementations and resolved bugs in google map. ",
    quitReason: "left MGH to finish Masters in CBNU."
  },
  {
    name: "MGH group",
    startTime: "January 2020",
    quitTime: "December 2020",
    title: "Fullstack Developer",
    startResponsibility: "",
    quitReason: "left MGH to finish Masters in CBNU."
  },
  {
    name: "TeraArk",
    startTime: "January 2021",
    quitTime: "",
    title: "Fullstack Developer",
    startResponsibility: "",
    quitReason: ""
  },


  ]
  return <>
    {/* <LinkMessage {...blog} /> */}
    <div>
      This is the very beginning of the experiences channel. Here listed are the companies I worked for and their respective timelines.
    </div>

    {companies.map((company, idx) => {

      const { startTime, quitTime, startResponsibility, name, title, quitReason } = company
      return <>
        <TimeCapsule time={startTime} />
        <TextMessage message={`joined ${name} as a ${title}.`} />

        {startResponsibility && <TextMessage message={startResponsibility} />}
        {quitTime && <TimeCapsule time={quitTime} />}
        {quitReason && <TextMessage message={quitReason} />}

      </>

    }
    )}





    {/* <LinkMessage {...pointAvenue} /> */}
  </>
}
export default Projects