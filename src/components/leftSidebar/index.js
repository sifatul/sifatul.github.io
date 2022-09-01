import Style from './leftSidebar.module.scss'
import ChannelList from "./channelList"
import PeopleList from "./peopleList"
import Applist from "./appList"
import ChannelItem from "./channelItem"
import { useStore } from '../../store'
import { useEffect, useRef } from 'react'


const LeftSidebar = () => {

  const { activeSidebarItem, hideSidebar } = useStore();
  const { open } = activeSidebarItem

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          hideSidebar()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <>
    <div className={Style.workspace} >
      <div className={Style.myWorkspace}>SI</div>

    </div>

    {<div className={`${Style.channelsPeopleWrapper} ${open && Style.active}`} ref={wrapperRef}>
      <div className={Style.nameSection}> Sifatul </div>
      <div className={Style.wrapper}>
        <ChannelList />
        <PeopleList />
        <Applist />
      </div>
      <div className={`${Style.channelListSection} ${Style.huddle}`}>

        <ChannelItem

          label="Huddle" imgSrc="https://img.icons8.com/small/16/c7b7c6/radio-tower.png"
        />

      </div>
    </div>}

  </>
}
export default LeftSidebar