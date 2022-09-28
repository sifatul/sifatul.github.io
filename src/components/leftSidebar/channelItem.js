import { memo, useMemo } from 'react';
import Style from './leftSidebar.module.scss';
import Image from "../global/image"
const ChannelItem = (props) => {
  const { label, imgSrc, active, onClick, extraLabel } = props



  return <>
    <div
      className={`hasLink ${Style.channelItem}   ${active && Style.active}`}
      onClick={onClick}>
      <Image
        className={`${Style.channelIcon} ${Style.addIcon}`}
        src={imgSrc} alt={label} />
      <div>
        <span > {label}</span>
        {extraLabel && <span
          className={Style.extraLabel}

        > {extraLabel}</span>}
      </div>
    </div>
  </>
}
export default memo(ChannelItem)