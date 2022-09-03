import Style from "./contactItem.module.scss"
import Image from "../global/image"
const ContactItem = (props) => {
  const { label, icon, value } = props
  return <>
    <div className={Style.wrapper}>
      <div className={Style.imageContainer}>
        <Image src={icon} alt={label} />
      </div>
      <div className={Style.dataContainer}>
        <span >{label}</span>
        <span className={"hasLink"}>{value}</span>

      </div>
    </div>
  </>
}
export default ContactItem