import { MY_INFO } from '../../constants/index'
import ContactItem from './contactItem'
import Style from "./userProfile.module.scss"
import { IMAGE_COLOR } from "../../constants/index"
import { useStore } from "../../store"
import { useRef } from 'react';
import { useOutsideAlerter } from "../../hooks/outsideClickHandler";
import { formatAMPM } from "../../helpers/time.helper"
import Image from "../global/image"


const contactInfo = [
  { label: "Email Address", value: MY_INFO.email, icon: `https://img.icons8.com/ios/18/000000/mail.png` },
  { label: "Phone", value: MY_INFO.phone, icon: "https://img.icons8.com/ios/18/000000/phone.png" },
]

const UserProfile = () => {
  const { profileVisible, hideUserProfile } = useStore();

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
        <Image className={Style.avatar} src={MY_INFO.avatar} alt="my-avatar" />
      </div>


      <div className={Style.wrapper}>
        <span className={Style.name}>{MY_INFO.name}</span>
        <span className={Style.title}>{MY_INFO.title}</span>
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