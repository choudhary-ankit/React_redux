import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import personReducer from './Reducers/PersonReducers';
import gameReducer from './Reducers/GameReducer'
import userReducer from './Reducers/UserReducer'
import inputReducer from './Reducers/InputReducer'
import thunk from 'redux-thunk';


const allReducer = combineReducers({game:gameReducer,person:personReducer,inputvalue:inputReducer,user:userReducer})

const initialStates={
  game:{name:"football",},
  person:{name:"Ankit",},
  inputvalue:{value:null},
  user:[]
}

const middleware=[thunk]

const store=createStore(allReducer,initialStates, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));



export default store;

