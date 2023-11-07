import React from 'react';
import '../styles/Output.css'

const List = ({ todos, onDeleteTodo, onEditTodo,searchDate }) => {
  const handleDelete = (index) => {
    onDeleteTodo(index);
  };

  const handleEdit = (index) => {
    const todoToUpdate = todos[index];
    onEditTodo(index, todoToUpdate);
  };

  const filterDate=todos.filter((todo)=>todo.date===searchDate)

  return (
    <ul className='output' >
      {todos.map((todo, index) => (
        <li key={index}>
          <p>Travail : {todo.work}</p>
          <p>Description : {todo.description}</p>
          <p>Date : {todo.date}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Update</button>
        </li>
      ))}
    </ul>
  );
};

export default List;