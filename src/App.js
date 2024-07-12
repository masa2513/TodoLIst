import { useState, useRef } from "react";
import TodoList from "./TodoList"
import { v4 as uuidv4} from "uuid";
import "./App.css"
function App() {
  const [todos, setTodos] = useState([]);
  
  const todoNameRef = useRef();

  const handleAddTodo = ( ) =>{
    //タスクを追加する。
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = null;
  };

const toggleTodo = (id) => {
  const newTodos = [...todos];
  const todo = newTodos.find((todo) => todo.id ===id);
  todo.completed = !todo.completed;
  setTodos(newTodos);
};

const handleclear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
};
  
  return (
    <div className="body">
    <div className="todoCheck">
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
    <div className="todolist">
    <div className="task">
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo} className="button">タスクを追加</button>
      <button onClick={handleclear} className="button">完了したタスクの削除</button>
      </div>
      <div className="resttask">残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
      </div>
    </div>
  );
}

export default App;
