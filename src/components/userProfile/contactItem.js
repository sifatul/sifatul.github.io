import Style from "./contactItem.module.scss"
const ContactItem = (props) => {
  const { label, icon, value } = props
  return <>
    <div className={Style.wrapper}>
      <div className={Style.imageContainer}>
        <img src={icon} alt={label} />
      </div>
      <div className={Style.dataContainer}>
        <span >{label}</span>
        <span className={"hasLink"}>{value}</span>

      </div>
    </div>
  </>
}
export default ContactItem