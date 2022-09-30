import { get, getDatabase, onChildAdded, push, ref, set } from "firebase/database";
import { useCallback } from "react";
import { useStore } from "../store";


function RealtimeDatabaseManage() {
  const { myInfo } = useStore();


  const saveDataInFirebase = useCallback((text, receiverId) => {
    if (!myInfo) return
    const db = getDatabase();
    const sender = myInfo.userId;

    push(ref(db, 'messages/' + sender), {
      sender,
      receiver: receiverId,
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


  const getAllUsers = useCallback(async (userId) => {
    const db = getDatabase();
    const starCountRef = ref(db, `users/`);

    return new Promise(resolve => {

      try {
        get(starCountRef).then((snapshot) => {

          if (snapshot.exists()) {
            console.log(snapshot.val());
            resolve(snapshot.val())
          } else {
            console.log("No data available");
            resolve({})
          }
        }).catch((error) => {

          console.error(error);
          resolve({})
        });
      } catch (e) {
        resolve({})
      }


    })

  }, [])



  return { saveDataInFirebase, databaseListener, getUserInfo, saveUserInfo, getAllUsers }

}

export default RealtimeDatabaseManage



