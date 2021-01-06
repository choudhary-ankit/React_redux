// import store from '../index'
export const UPDATE_INPUT="UPDATE_INPUT"

const input_value=(value)=>{
    return{
        type:UPDATE_INPUT, 
        payload:value
    }
}

export default input_value;