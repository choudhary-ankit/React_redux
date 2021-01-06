import {UPDATE_INPUT} from '../Actions/InputActions'
const inputReducer=(state={},{type,payload})=>{
  switch(type){
    case UPDATE_INPUT:
      return{value:payload}
    default:
      return state
  }
  }

  export default inputReducer;