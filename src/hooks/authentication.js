import FierbaseApp from "../helpers/firebaseConfig"
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useStore } from '../store';
import { useCallback } from "react";
import { GetData } from "../helpers/httpClient.helper";
import RealtimeDatabaseManage from "../hooks/RealtimeDatabase"
import { SIFATUL_INFO } from "../components/leftSidebar/peopleList";



const ManageAuth = () => {

  const { addUsers, users, isAdmin } = useStore();
  const { getUserInfo, saveUserInfo } = RealtimeDatabaseManage()

  const setUserProfile = useCallback(async (userId) => {
    let userInfo = isAdmin ? users.sifatul : await getUserInfo(userId)
    console.log(" login: ", userInfo)
    if (!userInfo) {

      const getProfileImage = GetData('https://some-random-api.ml/animal/panda')
      const getRandomUser = GetData('https://randomuser.me/api/?gender=male');
      const promises = await Promise.all([getProfileImage, getRandomUser])
      const { results = [] } = promises[1]

      try {

        const name = results[0].name.first
        const image = promises[0].image

        userInfo = {
          avatar: image,
          name: name,
          userId
        }
        saveUserInfo(userInfo)

      } catch (e) {

      }

    }


    if (userInfo) {
      addUsers({
        [userInfo.userId]: {
          ...userInfo,
          extraLabel: "you",
        }
      })

    }


  }, [isAdmin])

  const AnonymousLogin = useCallback(() => {
    const app = FierbaseApp()


    // Initialize Realtime Database and get a reference to the service
    // const database = getDatabase(app);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

    signInAnonymously(auth)
      .then(() => {
        console.log("singed in ")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }, [])

  useEffect(() => {
    if (!FierbaseApp) return
    const app = FierbaseApp()
    const auth = getAuth(app);


    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserProfile(uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });


  }, [FierbaseApp])

  const sifatulLogin = useCallback(() => {
    const userInfo = users.sifatul
    addUsers({
      [userInfo.userId]: {
        ...userInfo,
        extraLabel: "you",
      }
    })
  }, [])
  return { AnonymousLogin }

}
export default ManageAuth