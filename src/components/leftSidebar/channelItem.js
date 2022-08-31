import { useStore } from '../../store'
const ChannelItem = (props) => {
  const { label, imgSrc } = props

  const { setActiveSidebar, activeSidebar } = useStore();
  console.log(activeSidebar)


  return <>
    <div class={`channel-item hasLink ${activeSidebar === label && 'active'}`} onClick={e => setActiveSidebar(label)}>
      <img class="channel-icon add-icon" src={imgSrc} alt={label} />
      <span class="channel name"> {label}</span>
    </div>
  </>
}
export default ChannelItem