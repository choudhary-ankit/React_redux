import {UPDATE_USER} from '../Actions/UserActions'


const userReducer=(state={},{type,payload})=>{

    switch(type){

        case UPDATE_USER:
            return payload
        default:
            return state
    }
}

  export default userReducer;