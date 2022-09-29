import ChannelView from "./components/channelView";
import LeftSidebar from "./components/leftSidebar";
import UserProfile from "./components/userProfile";
import { AnonymousLogin } from "./hooks/authentication";
import './index.scss';

function App() {

  AnonymousLogin()

  return (
    <div className="container">
      <LeftSidebar />
      <ChannelView />
      <UserProfile />

    </div>


  );
}

export default App;
