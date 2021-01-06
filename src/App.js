import './App.css';
import update_name from './Store/Actions/PersonsActions'
import update_game from './Store/Actions/GameAction'
import { connect } from 'react-redux';
import fetch_data from './Store/Actions/UserActions'
import input_value from './Store/Actions/InputActions'
import React,{useState,useEffect} from 'react'

function App(Props) {
  let [value, setvalue]=useState('')

  const getVallue=(e)=>{
    setvalue(e.target.value)
  }
  
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
      <div>
        person Name:{Props.person.name}
        <br/>
        Game Name:{Props.game.name}
      </div>
      <div>
        <button onClick={Props.updateperson}>Update person Name</button>
        <button onClick={Props.updateGame}>Update Game Name</button>
      </div>
      <br/>
      <div>
        <input onChange={getVallue}/>
        <button onClick={()=>Props.input_value(value)}>submit value</button>
        <p>{Props.inputvalue.value}</p>
      </div>
      <br/>
      <div>
        User: <button onClick={Props.userData}>Fetch Data</button>
      </div>
      <div>
        { Props.user.length===0?
            <p>No recoreds</p>
            :
          
            Props.user.data.map((e)=>{
              return(
                <>
                  <p>User:{e.email}</p>
                  <p>First-name:{e.first_name}</p>
                  <p>Last-name:{e.last_name}</p>
                </>
              )
          })
        }
      
      </div>

    </div>
  );
}
const mapStateToProps= state =>{
  return{
    game:state.game,
    person:state.person,
    inputvalue:state.inputvalue,
    user:state.user
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    updateGame:()=>{dispatch(update_game)},
    userData:()=>{dispatch(fetch_data)},
    updateperson:()=>{dispatch(update_name)},
    input_value:(value)=>{dispatch(input_value(value))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
