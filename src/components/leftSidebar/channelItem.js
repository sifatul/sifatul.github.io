import { memo, useMemo } from 'react';
import Style from './leftSidebar.module.scss';

const ChannelItem = (props) => {
  const { label, imgSrc, active, onClick } = props


  return <>
    <div
      className={`hasLink ${Style.channelItem}   ${active && Style.active}`}
      onClick={onClick}>
      <img
        className={`${Style.channelIcon} ${Style.addIcon}`}
        src={imgSrc} alt={label} />
      <span > {label}</span>
    </div>
  </>
}
export default memo(ChannelItem)