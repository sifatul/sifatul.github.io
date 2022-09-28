import './index.scss';
import LeftSidebar from "./components/leftSidebar"
import ChannelView from "./components/channelView"
import UserProfile from "./components/userProfile"
import { useStore } from '../src/store';
import { GetData } from './helpers/httpClient.helper';
import { useEffect } from 'react';

function App() {

  const { setSenders } = useStore();





  useEffect(() => {
    GetData('https://some-random-api.ml/animal/panda').then((res = {}) => {
      const { image } = res
      setSenders({
        imgSrc: image,
        name: 'Happy Panda',
        extraLabel: "you"
      })

    })

  }, [])


  return (
    <div className="container">
      <LeftSidebar />
      <ChannelView />
      <UserProfile />

    </div>


  );
}

export default App;
