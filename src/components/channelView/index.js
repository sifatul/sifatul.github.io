import { useCallback } from 'react'
import { useStore } from '../../store'
import { peopleArr } from '../leftSidebar/peopleList'
import Style from './channelView.module.scss'
import IntroMessage from "./introMessage"
import TextEditor from "./textEditor"
const ChannelView = () => {

  const { activeSidebarItem, hideSidebar, showSidebar } = useStore();
  const { activeSidebarLabel, activeSidebarIcon, open } = activeSidebarItem;

  const toggleSidebar = useCallback(() => {
    return open ? hideSidebar() : showSidebar()
  }, [open])

  return <>

    <div className={Style.channelView}>
      <div className={Style.nameSection}>
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

      <div className={Style.wrapper}>
        {activeSidebarLabel === peopleArr[0].label && <IntroMessage />}
        {activeSidebarLabel !== peopleArr[0].label && <> {activeSidebarLabel}</>}

      </div>
      <TextEditor />
    </div>

  </>

}
export default ChannelView