import React from 'react';

const ToDoItem = props => {
    const resolveClass = {
        textDecoration : 'line-through'
    }
    return (
        <div className="todo-item">
            <div className="input-wrapper">
                <input
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={props.handleChange}
                    disabled={props.completed}
                />
            </div>
            <div className="description-wrapper">
                <p
                    style={props.completed === true ? resolveClass : {}}
                >
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default ToDoItem;