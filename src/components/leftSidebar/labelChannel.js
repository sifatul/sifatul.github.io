import Style from './leftSidebar.module.scss'
const LabelChannel = (props) => {
  const { label, toggleOpen, open } = props
  const iconUrl = open ? 'https://img.icons8.com/metro/15/c7b7c6/sort-down.png' : 'https://img.icons8.com/metro/15/c7b7c6/sort-right.png'
  return <>
    <div className={`hasLink ${Style.channelItem} ${Style.labelOnly} `} onClick={e => toggleOpen()}>

      <img className={Style.channelIcon} src={iconUrl} alt="down-arrow-icon" />

      <span  > {label}</span>
    </div>

  </>
}
export default LabelChannel