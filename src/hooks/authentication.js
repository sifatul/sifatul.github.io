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
    console.log(" login: ", userInfo, users, isAdmin)
    if (!userInfo) {  

      try {
         
        const getRandomUser = await GetData('https://randomuser.me/api/?gender=male');
  
        const { results = [] } = getRandomUser 

        const name = results[0].name.first
        const image = results[0].picture.thumbnail

        userInfo = {
          avatar: image,
          name: name,
          userId
        }
        saveUserInfo(userInfo)
        console.log("saved userInfo", userInfo)

      } catch (e) {
        console.log("error while saving user info", e)

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
        console.error(errorMessage)
      });
  }, [])

  useEffect(() => {
    if (!FierbaseApp) {
      console.debug("Fierbase not found")
      return
    }
    const app = FierbaseApp()
    const auth = getAuth(app);


    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserProfile(uid)
        console.log("set user profile")
        // ...
      } else {
        console.log("User is signed out")
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