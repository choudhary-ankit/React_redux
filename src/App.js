import './App.css';
import update_name from './Store/Actions/PersonsActions'
import update_game from './Store/Actions/GameAction'
import { connect } from 'react-redux';
import fetch_data from './Store/Actions/UserActions'


function App(Props) {
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
        User: <button onClick={Props.userData}>Fetch Data</button>
      </div>
      <div>
        { Props.user.length===0?
            console.log(Props.user)
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
    user:state.user
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    updateGame:()=>{dispatch(update_game)},
    userData:()=>{dispatch(fetch_data)},
    updateperson:()=>{dispatch(update_name)}
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
