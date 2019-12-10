import React ,{useState} from 'react';
import TotoList from './TotoList'

function App() {
 
  const [todos, setTodos]= useState([{id:1, name: "Crossfit", complete:false}]);
  return (
    <>
       <TotoList todos ={todos}/>
       <input></input>
       <button>Add Todo</button>
       <button>Clear Completed</button>
       <div>0 left to do</div>
    </>
  )
}

export default App;
