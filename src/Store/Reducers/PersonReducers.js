import {UPDATE_PERSON} from '../Actions/PersonsActions'
const personReducer=(state={},{type,payload})=>{
  switch(type){
    case UPDATE_PERSON:
      return{name:payload}
    default:
      return state
  }
  }

  export default personReducer;