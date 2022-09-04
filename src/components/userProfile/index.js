import { MY_INFO, TERAARK_INFO, DURBAR_INFO, MGH_GROUP_INFO, MONEYBRAIN_INFO, OBHAI_INFO, AI_STUDIOS_INFO, SPEAK_NOW_INFO, TERACOMIX_INFO } from '../../constants/index'
import ContactItem from './contactItem'
import Style from "./userProfile.module.scss"
import { IMAGE_COLOR } from "../../constants/index"
import { useStore } from "../../store"
import { useRef } from 'react';
import { useOutsideAlerter } from "../../hooks/outsideClickHandler";
import { formatAMPM } from "../../helpers/time.helper"
import Image from "../global/image"

const profilesInfo = {
  [DURBAR_INFO.name]: DURBAR_INFO,
  [MGH_GROUP_INFO.name]: MGH_GROUP_INFO,
  [OBHAI_INFO.name]: OBHAI_INFO,
  [MONEYBRAIN_INFO.name]: MONEYBRAIN_INFO,
  [AI_STUDIOS_INFO.name]: AI_STUDIOS_INFO,
  [SPEAK_NOW_INFO.name]: SPEAK_NOW_INFO,
  [TERAARK_INFO.name]: TERAARK_INFO,
  [TERACOMIX_INFO.name]: TERACOMIX_INFO,
}


const UserProfile = () => {
  const { profileVisible, hideUserProfile } = useStore();

  let userInfo = {
    name: MY_INFO.name,
    title: MY_INFO.title,
    avatar: MY_INFO.avatar,
    email: MY_INFO.email,
    website: MY_INFO.website,
    phone: MY_INFO.phone,
  }
  if (profilesInfo[profileVisible]) userInfo = profilesInfo[profileVisible]


  const contactInfo = [
    { label: "Email Address", value: userInfo.email, icon: `https://img.icons8.com/ios/18/000000/mail.png` },
    { label: "Phone", value: userInfo.phone, icon: "https://img.icons8.com/ios/18/000000/phone.png" },
    { label: "Website", value: userInfo.website, icon: "https://img.icons8.com/pastel-glyph/18/000000/website--v2.png" },
  ]


  const time = formatAMPM(new Date)

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, hideUserProfile);

  if (!profileVisible) return <></>
  return <>

    <div className={Style.profileView} ref={wrapperRef}>
      <div className={`nameSection ${Style.nameSection}`}>
        <span>Profile </span>
      </div>
      <div className={Style.avatarContainer}>
        <Image className={Style.avatar} src={userInfo.avatar} alt="my-avatar" />
      </div>


      <div className={Style.wrapper}>
        <span className={Style.name}>{userInfo.name}</span>
        <span className={Style.title}>{userInfo.title}</span>
        <div className={Style.onlineStatus}>
          <div className={Style.imageContainer}>
            <Image src={`https://img.icons8.com/material-outlined/24/${IMAGE_COLOR}/circled.png`} alt="circle-icon" />
          </div>
          <span>Away</span>
        </div>
        <div className={Style.currentTime}>

          <div className={Style.imageContainer}>
            <Image src={`https://img.icons8.com/pastel-glyph/20/000000/clock--v1.png`} alt="clock-icon" />
          </div>
          <span>{time} local time</span>

        </div>


      </div>

      <div className={`${Style.wrapper} ${Style.contactWrapper}`}>
        <span className={Style.header}> Contact information</span>
        <>
          {contactInfo.map(item => {
            return <ContactItem {...item} key={item.label} />
          })}
        </>

      </div>


    </div>
  </>
}
export default UserProfile