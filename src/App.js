import React, {Component} from 'react';
import './App.css';
import ToDoItem from "./todo/todoitem.js";
import todoData from "./todo/todosdata.js";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoItems : todoData
        }
        this.input = React.createRef();
    }
    handleChange = id => {
        const index = this.state.todoItems.map(item => item.id).indexOf(id);
        this.setState(state => {
            let {todoItems} = state;
            todoItems[index].completed = true;
            return todoItems;
        })
    }
    addTask = () => {
        if (this.input.current.value.trim() != "") {
            let newItem = {};
            newItem.completed = false;
            newItem.description = this.input.current.value;
            newItem.id = Math.max.apply(Math, this.state.todoItems.map(function(i) { return i.id; })) + 1;
            this.setState({
                todoItems: [...this.state.todoItems, newItem]
            });
            this.input.current.value = "";
        }
    }
    clearFin = () => {
        this.setState({
            todoItems: this.state.todoItems.filter(task => task.completed === false)
        });
    }
    render() {
        const {todoItems} = this.state;
        const activeTasks = todoItems.filter(task => task.completed === false);
        const completedTasks = todoItems.filter(task => task.completed === true);
        const finalTasks = [...activeTasks,...completedTasks].map(item => {
            return (
                <ToDoItem
                    key={item.id}
                    description={item.description}
                    completed={item.completed}
                    handleChange={() => {this.handleChange(item.id)}}
                />
            )
        })
        return (
            <div className="App">
                <h1 className="title">Планы на день</h1>
                <h2 className="titleBlock">Задачи</h2>
                <div>
                    <input type="text" ref={this.input}/>
                    <button className="button" onClick={this.addTask}>+</button>
                </div>
                <div>
                    {finalTasks}
                </div>
                <button className="button" onClick={this.clearFin}>X</button>
            </div>
        );
    }
}

export default App;
