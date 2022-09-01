import LinkMessage from "./singleMessage/linkMessage"
import TextMessage from "./singleMessage/textMessage"
import TimeCapsule from "./singleMessage/timeCapsule"

const IntroMessage = () => {

  const blogLink = {
    link: "https://dev.to/sifatul/create-package-in-github-registry-51p9",
    previewImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--VC0V3bMa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a3t917ikhl3szi5lff1a.png",
    platformName: "DEV Community",
    title: "Simple guide to create package in Github registry",
    description: "Creating a package in the GitHub registry is very simple. Firstly package.json needs to be updated;... (32 kB)",
    message: "you can checkout my blog too. Here is a good article to start with.",
    favicon: "https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png",
  }

  return <>


    <TextMessage
      message="Hello there.\nMy name is Md Sifatul Islam. I have been working as a fullstack developer for around 4 years. Currently I am working as technical lead playing the role as the main developer to oversee all development projects at TeraComix. 
      \nFor TeraArk & TeraComix I lead the development, built CI/CD pipelines, code review and manage a team of six remote developers; I also have a proven track record of working with the project from planning to deployment.
"
    />

    <TextMessage
      message="I work with NodeJs (Express/NestJs) in backend, ReactJs (NextJs) using JavaScript / TypeScript, Java for competitive programming, Docker, MongoDB or MySQL for database. I am very comfortable in working with AWS cloud services like RDS, S3, ECS, EC2 etc and hold AWS solution associate certification too."
    />
    <TimeCapsule time="Today" />

    <TextMessage
      message="This project is to represent my portfolio in a fun and interactive manner. Feel free to click around, explore through to know more about me."
    />


  </>

}
export default IntroMessage