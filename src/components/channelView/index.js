import { useMemo } from 'react'
import { useStore } from '../../store'
import { channels } from "../leftSidebar/channelList"
import { peopleArr } from '../leftSidebar/peopleList'
import Style from './channelView.module.scss'
import Header from "./header"
import IntroMessage from "./introMessage"
import Projects from './projects'
import Experiences from './experiences'
import TextEditor from "./textEditor/textEditor"
const ChannelView = () => {

  const { activeSidebarItem } = useStore();
  const { activeSidebarLabel } = activeSidebarItem;

  const activePage = useMemo(() => {
    switch (activeSidebarLabel) {
      case peopleArr[0].label:
        return <IntroMessage />;
      case channels[0].label:
        return <Projects />
      case channels[1].label:
        return <Experiences />
      default:
        return <>{activeSidebarLabel}</>;
    }

  }, [activeSidebarLabel])


  return <>

    <div className={Style.channelView}>
      <Header />

      <div className={Style.wrapper}>
        {activePage}

      </div>
      <TextEditor />
    </div>

  </>

}
export default ChannelView