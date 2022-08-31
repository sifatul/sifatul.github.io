const LabelChannel = (props) => {
  const { label, toggleOpen, open } = props
  const iconUrl = open ? 'https://img.icons8.com/metro/15/c7b7c6/sort-down.png' : 'https://img.icons8.com/metro/15/c7b7c6/sort-right.png'
  return <>
    <div class="channel-item labelOnly hasLink" onClick={e => toggleOpen()}>

      <img class="channel-icon" src={iconUrl} alt="down-arrow-icon" />

      <span class="channel name"> {label}</span>
    </div>
  </>
}
export default LabelChannel