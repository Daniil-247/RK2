import React from 'react';

const ToDoItem = props => {
    return (
        <div className="todo-item">
            <div className="description-wrapper">
                <p>{props.description}</p>
            </div>
            <div className="input-wrapper">
                <input
                    type="checkbox"
                    defaultChecked={props.completed}
                />
            </div>
        </div>
    )
}

export default ToDoItem;