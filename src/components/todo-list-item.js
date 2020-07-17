import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({text, deleteTask}) => {
  return(
    <div className="todo-list-item">
      <div className="text">{text}</div>
      <button className="btn" onClick={deleteTask}>Delete task</button>
    </div>
  );
}

export default TodoListItem;
