import React from 'react';
import './todolist.css';

import TodoListItem from './todo-list-item';

const TodoList = ({tasks, deleteTask}) => {
  const elements = tasks.map(({text, id}) => {
    return <li key={id}><TodoListItem text={text} deleteTask={() => deleteTask(id)} /></li>
  });
  return(
    <div>
      <ul>
      {elements}
      </ul>
    </div>
  );
}

export default TodoList;
