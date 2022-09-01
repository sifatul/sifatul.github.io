import './index.scss';
import LeftSidebar from "./components/leftSidebar"
import ChannelView from "./components/channelView"
import UserProfile from "./components/userProfile"

function App() {
  return (
    <div className="container">
      <LeftSidebar />
      <ChannelView />
      <UserProfile />

    </div>


  );
}

export default App;
