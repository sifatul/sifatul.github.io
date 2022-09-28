import { MY_INFO } from "../../../constants";
import { useStore } from '../../../store';
import TextMessage from "../singleMessage/textMessage";
import TimeCapsule from "../singleMessage/timeCapsule";
import TextEditor from "../textEditor/textEditor";


const IntroMessage = () => {


  const { introMessages } = useStore();



  const blogLink = {
    link: "https://dev.to/sifatul/create-package-in-github-registry-51p9",
    previewImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--VC0V3bMa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a3t917ikhl3szi5lff1a.png",
    platformName: "DEV Community",
    title: "Simple guide to create package in Github registry",
    description: "Creating a package in the GitHub registry is very simple. Firstly package.json needs to be updated;... (32 kB)",
    message: "you can checkout my blog too. Here is a good article to start with.",
    favicon: "https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png",
  }

  const MyInfo = {
    senderAvatar: MY_INFO.avatar,
    senderName: MY_INFO.name,
  }
  return <>
    {introMessages.map((msgItem, idx) => {
      const { message, time, senderInfo = MyInfo } = msgItem
      return <div key={idx}>
        {time && <TimeCapsule time={time} />}
        <TextMessage

          message={message}
          senderInfo={senderInfo}
        />
      </div>
    })}
    <TextEditor />

  </>

}
export default IntroMessage