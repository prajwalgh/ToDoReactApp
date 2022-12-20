import React from 'react';
import './App.css';
import { useState } from "react";

function App() {
  
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (todo!==""){
      setTodos([...todos, todo]);
      setTodo("");
    }
    
};
const deleteTodo=(text)=>{
  const newTodos= todos.filter((todo)=>{
    return todo!==text;

  });
  setTodos(newTodos)
}
  return (
    <div className='wrapper' >
      
      <div><p> 📋 TO DO APP</p></div>
      <div>
      {todos?.length>0 ?(
        <ul className='todo-list-ul'>
        {todos.map((todo,index)=>(
          <div className='todo-item-mainclass'>
          <div className='todo-item1'>
            <li  key={index}>{todo}
            <button  onClick={()=>{deleteTodo(todo);}}className='delete-button'>Delete</button>
            </li>
          </div>
          <div className='todo-item2'><li>data and time</li></div>
          </div>
        ))}
        </ul> ) : (
          <div className='empty'><p>No task found</p></div>
        )}
      </div>
      <div className='input-wraper'>
        <input
         type="text"
         name="todo"
         value={todo}
         placeholder="create a new todo"
         onChange={(e)=>{
          setTodo(e.target.value);
         }}
          ></input>
        <button  onClick={addTodo} className='add-button'>Add</button>
      </div>
    </div>
  );
}

export default App;
