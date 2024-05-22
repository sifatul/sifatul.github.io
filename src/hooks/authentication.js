import { useCallback } from "react";
import { GetData } from "../helpers/httpClient.helper";
import { useStore } from '../store';



const ManageAuth = () => {
  const { addUsers,} = useStore();

  const AnonymousLogin = useCallback(async (userId) => {



    try {
         
      const getRandomUser = await GetData('https://randomuser.me/api/?gender=male');

      const { results = [] } = getRandomUser 

      const name = 'you'
      const image = results[0].picture.thumbnail

      const userInfo = {
        avatar: image,
        name: name,
        userId:'randomuser'
      }
      addUsers({
        [userInfo.userId]: userInfo
      })

    } catch (e) {
      console.log("error while saving user info", e)

    }


  }, [])

  return { AnonymousLogin }

}
export default ManageAuth