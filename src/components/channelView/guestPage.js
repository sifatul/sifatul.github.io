import ChannelIntro from "../channelView/channelIntro"
import { useStore } from '../../store'
import PersonIntro from "./personIntro";

const GuestPage = () => {
  const { activeSidebarItem } = useStore();
  const { activeSidebarLabel, activeSidebarIcon } = activeSidebarItem;

  return <>
    <PersonIntro
      channelName={activeSidebarLabel}
      body="This is your space but please bear in mind this page is just made to keep sync with the Slack UI and does not have any functional value in this project."
      imgSrc={activeSidebarIcon}

    />
  </>
}
export default GuestPage