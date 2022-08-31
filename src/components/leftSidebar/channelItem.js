import { useStore } from '../../store';
import Style from './leftSidebar.module.scss';

const ChannelItem = (props) => {
  const { label, imgSrc } = props

  const { setActiveSidebar, activeSidebarLabel } = useStore();
  console.log(activeSidebarLabel)


  return <>
    <div

      className={`${Style.channelItem} ${Style.hasLink} ${activeSidebarLabel === label && Style.active}`}
      onClick={e => setActiveSidebar(label, imgSrc)}>
      <img
        className={`${Style.channelIcon} ${Style.addIcon}`}
        src={imgSrc} alt={label} />
      <span > {label}</span>
    </div>
  </>
}
export default ChannelItem