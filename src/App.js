import logo from './logo.svg';
import React from 'react';
import './App.css';
import ToDoItem from "./todo/todoitem.js";
import todosdata from "./todo/todosdata.js";
import todoData from "./todo/todosdata.js";

function App() {
  const todoItems = todoData.map(item => {
    return (
        <ToDoItem
            key={item.id}
            description={item.description}
            completed={item.completed}
        />
    )
  })
  return (
    <div className="App">
        {todoItems}
    </div>
  );
}

export default App;
