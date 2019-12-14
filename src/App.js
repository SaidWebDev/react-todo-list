import React ,{useState, useRef, useEffect} from 'react';
import TotoList from './TotoList'
import uuidv4 from 'uuid/v4'
import { func } from 'prop-types';

const LOCAL_STORAGE_KEY= 'todoApp.todos'

function App() {
 
  const [todos, setTodos]= useState([]);
  const todoNameRef = useRef()
  
useEffect(() => {
  const storedTodos =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
if(storedTodos)
setTodos(storedTodos)

},[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) 


function toggleTodo(id) {
  const newTodos =[ ...todos]
  const todo = newTodos.find( todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}
  
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
       <TotoList todos ={todos} toggleTodo={toggleTodo}/>
       <input ref={todoNameRef} type="text"/> 
       <button onClick={handleAddTodo}> Add Todo</button>
       <button>Clear Completed</button>
       <div> {todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
