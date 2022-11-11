import { useCallback } from 'react';
import { useStore } from '../../store';
import Style from './channelView.module.scss';
import Image from "../global/image"

const Header = () => {

  const { activeSidebarItem, hideSidebar, showSidebar } = useStore();

  const { activeSidebarLabel, activeSidebarIcon, open } = activeSidebarItem;
  console.log("activeSidebarLabel: ", activeSidebarLabel)

  const toggleSidebar = useCallback(() => {
    return open ? hideSidebar() : showSidebar()
  }, [open, hideSidebar, showSidebar])


  return <>
    <div className={`nameSection ${Style.nameSection}`}>
      <div
        onClick={e => toggleSidebar()}

      >
        <Image
          onClick={e => toggleSidebar()}
          style={{ paddingRight: 10 }}
          className={`${Style.channelIcon} ${Style.navigationIcon} `}
          src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-sidebar-applications-windows-those-icons-lineal-those-icons.png"
          alt="navigation-icon"
        />
      </div>
      <Image
        className={`${Style.channelIcon} ${Style.bigIcon}`}
        src={activeSidebarIcon} alt={activeSidebarLabel} />
      <span>{activeSidebarLabel} </span>
    </div>
  </>
}
export default Header