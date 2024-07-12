import React from 'react'
import "./App.js"
const Todo = ({todo, toggleTodo}) => {

    const handleTodoClick = () => {
        toggleTodo(todo.id);
    };
  return <div className='checkbox'> 
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick}/>
        </label>
    
    {todo.name}</div>;
};

export default Todo