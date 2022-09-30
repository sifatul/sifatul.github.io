import { getDatabase, onValue, push, ref, onChildAdded, child, get, set } from "firebase/database";
import { useCallback } from "react";
import { useStore } from "../store";


function RealtimeDatabaseManage() {
  const { myInfo } = useStore();


  const saveDataInFirebase = useCallback((text) => {
    if (!myInfo) return
    const db = getDatabase();

    push(ref(db, 'messages/' + myInfo.userId), {
      text,
      created_at: new Date().toISOString()

    });

  }, [myInfo])

  const databaseListener = useCallback((callback) => {
    if (!myInfo) return
    const db = getDatabase();
    const starCountRef = ref(db, 'messages/' + myInfo.userId);
    onChildAdded(starCountRef, (snapshot) => {
      const data = snapshot.val();
      callback(data)

    });
  }, [myInfo])

  const getUserInfo = useCallback(async (userId) => {
    const db = getDatabase();
    const starCountRef = ref(db, `users/${userId}`);

    return new Promise(resolve => {

      try {
        get(starCountRef).then((snapshot) => {

          if (snapshot.exists()) {
            console.log(snapshot.val());
            resolve(snapshot.val())
          } else {
            console.log("No data available");
            resolve(null)
          }
        }).catch((error) => {

          console.error(error);
          resolve(null)
        });
      } catch (e) {
        resolve(null)
      }


    })

  }, [])

  const saveUserInfo = useCallback((userInfo) => {

    const db = getDatabase();

    set(ref(db, 'users/' + userInfo.userId), {
      ...userInfo
    });

  }, [])




  return { saveDataInFirebase, databaseListener, getUserInfo, saveUserInfo }

}

export default RealtimeDatabaseManage



