import ChannelIntro from "../channelView/channelIntro"
import { useStore } from '../../store'

const GuestPage = () => {
  const { activeSidebarItem } = useStore();
  const { activeSidebarLabel, activeSidebarIcon } = activeSidebarItem;

  return <>
    <ChannelIntro
      channelName={activeSidebarLabel}
      body="This is your space but please bear in mind this page is just made to keep sync with the Slack UI but does not have any functional value in this project."
      imgSrc={activeSidebarIcon}

    />
  </>
}
export default GuestPage