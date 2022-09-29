import FierbaseApp from "../helpers/firebaseConfig"
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useStore } from '../store';
import { useCallback } from "react";
import { GetData } from "../helpers/httpClient.helper";



const AnonymousLogin = () => {

  const { setSenders } = useStore();
  const setUserProfile = useCallback(async (userId) => {
    const getProfileImage = GetData('https://some-random-api.ml/animal/panda')
    const getRandomUser = GetData('https://randomuser.me/api/');
    const promises = await Promise.all([getProfileImage, getRandomUser])
    const { results = [] } = promises[1]

    try {

      const name = results[0].name.first
      const image = promises[0].image

      setSenders({
        imgSrc: image,
        name,
        extraLabel: "you",
        userId
      })
    } catch (e) {

    }



  }, [])

  useEffect(() => {
    if (!FierbaseApp) return
    const app = FierbaseApp()
    // console.log(FierbaseApp)


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

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("uid", uid)
        setUserProfile(uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });


  }, [FierbaseApp])

}
export { AnonymousLogin }