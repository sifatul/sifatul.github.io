const LabelChannel = (props) => {
  const { label } = props
  return <>
    <div class="channel-item labelOnly hasLink">

      <img class="channel-icon" src="https://img.icons8.com/metro/15/c7b7c6/sort-down.png" alt="down-arrow-icon" />

      <span class="channel name"> {label}</span>
    </div>
  </>
}
export default LabelChannel