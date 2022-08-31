import { useStore } from '../../store';
import Style from './leftSidebar.module.scss';

const ChannelItem = (props) => {
  const { label, imgSrc } = props

  const { setActiveSidebar, activeSidebar } = useStore();
  console.log(activeSidebar)


  return <>
    <div

      className={`${Style.channelItem} ${Style.hasLink} ${activeSidebar === label && Style.active}`}
      onClick={e => setActiveSidebar(label)}>
      <img
        className={`${Style.channelIcon} ${Style.addIcon}`}
        src={imgSrc} alt={label} />
      <span > {label}</span>
    </div>
  </>
}
export default ChannelItem