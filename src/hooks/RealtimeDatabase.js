import { getDatabase, onValue, push, ref, onChildAdded } from "firebase/database";
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


  return { saveDataInFirebase, databaseListener }

}

export default RealtimeDatabaseManage



