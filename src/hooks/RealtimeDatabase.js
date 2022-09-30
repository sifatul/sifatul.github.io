import { get, getDatabase, onChildAdded, push, ref, set } from "firebase/database";
import { useCallback } from "react";
import { useStore } from "../store";


function RealtimeDatabaseManage() {
  const { myInfo } = useStore();


  const saveDataInFirebase = useCallback((text, destination, source) => {
    if (!myInfo) return
    const db = getDatabase();

    push(ref(db, 'messages/' + destination), {
      sender: source,
      receiver: destination,
      message: text,
      created_at: new Date().toISOString()

    });

  }, [myInfo])

  const databaseListener = useCallback((userId, callback) => {

    if (!myInfo) return
    if (!userId) userId = myInfo.userId
    const db = getDatabase();
    const starCountRef = ref(db, 'messages/' + userId);
    onChildAdded(starCountRef, (snapshot) => {
      const data = snapshot.val();
      callback(data)

    });
  }, [myInfo])


  const allMessageListener = useCallback(() => {
    const db = getDatabase();
    const starCountRef = ref(db, `messages/`);

    return new Promise(resolve => {

      try {
        get(starCountRef).then((snapshot) => {

          if (snapshot.exists()) {
            resolve(snapshot.val())
          } else {
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

  const getUserInfo = useCallback(async (userId) => {
    const db = getDatabase();
    const starCountRef = ref(db, `users/${userId}`);

    return new Promise(resolve => {

      try {
        get(starCountRef).then((snapshot) => {

          if (snapshot.exists()) {
            resolve(snapshot.val())
          } else {
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
            resolve(snapshot.val())
          } else {
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



  return { saveDataInFirebase, databaseListener, getUserInfo, saveUserInfo, getAllUsers, allMessageListener }

}

export default RealtimeDatabaseManage



