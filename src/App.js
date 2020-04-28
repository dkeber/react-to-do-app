import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: 'Todo1', 
complete: false}])
  return (
    <>
    <TodoList todos = {todos} />
    <input type="text" />
    <button>Add Todo</button>
    <button>Clear Comlete</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
