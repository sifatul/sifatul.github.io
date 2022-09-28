import ChannelIntro from "../channelView/channelIntro"
import { useStore } from '../../store'

const GuestPage = () => {
  const { activeSidebarItem } = useStore();
  const { activeSidebarLabel, activeSidebarIcon } = activeSidebarItem;

  return <>
    <ChannelIntro
      channelName={activeSidebarLabel}
      body="This is your space. Draft messages, list your to-dos, or keep links and files handy. You can also talk to yourself here, but please bear in mind you’ll have to supply both sides of the conversation."
      imgSrc={activeSidebarIcon}

    />
  </>
}
export default GuestPage