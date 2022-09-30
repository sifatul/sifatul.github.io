import { getApp } from "firebase/app";
import ChannelView from "./components/channelView";
import LeftSidebar from "./components/leftSidebar";
import UserProfile from "./components/userProfile";
import ManageAuth from "./hooks/authentication";
import './index.scss';
import { useStore } from "./store";

function App() {
  const { myInfo, } = useStore();

  const { AnonymousLogin } = ManageAuth()
  AnonymousLogin()


  if (!myInfo) return <></>

  return (
    <div className="container">
      <LeftSidebar />
      <ChannelView />
      <UserProfile />

    </div>


  );
}

export default App;
