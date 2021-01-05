import Axios from 'axios'
export const UPDATE_USER="UPDATE_USER"

const fetch_data=(dispatch)=>{
    Axios.get("https://reqres.in/api/users/")
       .then((res)=>{
           let userData=res.data
           dispatch({type:UPDATE_USER, payload:userData})
       })
}


export default fetch_data;