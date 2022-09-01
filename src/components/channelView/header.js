import { useCallback } from 'react';
import { useStore } from '../../store';
import Style from './channelView.module.scss';

const Header = () => {

  const { activeSidebarItem, hideSidebar, showSidebar } = useStore();

  const { activeSidebarLabel, activeSidebarIcon, open } = activeSidebarItem;

  const toggleSidebar = useCallback(() => {
    return open ? hideSidebar() : showSidebar()
  }, [open, hideSidebar, showSidebar])


  return <>
    <div className={`nameSection ${Style.nameSection}`}>
      <img
        onClick={e => toggleSidebar()}
        style={{ paddingRight: 10 }}
        className={`${Style.channelIcon} ${Style.navigationIcon} `}
        src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-sidebar-applications-windows-those-icons-lineal-those-icons.png"
        alt="navigation-icon"
      />
      <img
        className={`${Style.channelIcon} ${Style.bigIcon}`}
        src={activeSidebarIcon} alt={activeSidebarLabel} />
      <span>{activeSidebarLabel} </span>
    </div>
  </>
}
export default Header