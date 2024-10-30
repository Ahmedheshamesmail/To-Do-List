import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef();
  const handelAdd = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]); //sprid
    inputRef.current.value = "";
  }
  const handelStatus = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    console.log(todos)
  }
  const handelDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h2>To Do list</h2>
      <ul>
        {todos.map(({ text, completed }, index) => {
          return (
            <div className='item'>
              <li className={completed ? "done" : ""} key={index} onClick={() => handelStatus(index)}>{text}</li>
              <span onClick={() => handelDelete(index)}>❌</span>
            </div>
          )
        })}
      </ul>
      <input ref={inputRef} placeholder='Enter Task....' />
      <button onClick={handelAdd}>Add</button>
    </div>
  );
}

export default App;
