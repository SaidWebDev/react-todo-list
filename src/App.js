import React ,{useState, useRef} from 'react';
import TotoList from './TotoList'
import uuidv4 from 'uuid/v4'

function App() {
 
  const [todos, setTodos]= useState([]);
  const todoNameRef = useRef()

  function handleAddTodo(e){
    const name =todoNameRef.current.value

    if(name==='') return
    setTodos( preTodos => {
      return [...preTodos, {id:uuidv4(), name: name, complete: false}]
    })
    console.log("the name is " + name)
    todoNameRef.current.value=null
  }

  return (
    <>
       <TotoList todos ={todos}/>
       <input ref={todoNameRef} type="text"/> 
       <button onClick={handleAddTodo}> Add Todo</button>
       <button>Clear Completed</button>
       <div>0 left to do</div>
    </>
  )
}

export default App;
