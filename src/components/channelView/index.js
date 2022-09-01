import { useStore } from '../../store'
import { peopleArr } from '../leftSidebar/peopleList'
import Style from './channelView.module.scss'
import Header from "./header"
import IntroMessage from "./introMessage"
import TextEditor from "./textEditor"
const ChannelView = () => {

  const { activeSidebarItem } = useStore();
  const { activeSidebarLabel } = activeSidebarItem;


  return <>

    <div className={Style.channelView}>
      <Header />

      <div className={Style.wrapper}>
        {activeSidebarLabel === peopleArr[0].label && <IntroMessage />}
        {activeSidebarLabel !== peopleArr[0].label && <> {activeSidebarLabel}</>}

      </div>
      <TextEditor />
    </div>

  </>

}
export default ChannelView