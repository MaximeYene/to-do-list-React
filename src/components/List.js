import React from 'react';
import '../styles/Output.css'
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Update } from '@mui/icons-material';

const List = ({ todos, onDeleteTodo, onEditTodo }) => {
  const handleDelete = (index) => {
    onDeleteTodo(index);
  };

  const handleEdit = (index) => {
    const todoToUpdate = todos[index];
    onEditTodo(index, todoToUpdate);
  };

  return (
    <ul className='output' >
      {todos.map((todo, index) => (
        <li key={index}>
          <p>Travail : {todo.work}</p>
          <p>Description : {todo.description}</p>
          <p>Date : {todo.date}</p>
          <Button variant='contained' endIcon={<Delete/>} onClick={() => handleDelete(index)}>Delete</Button>
          <Button variant='contained' endIcon={<Update/>} onClick={() => handleEdit(index)}>Update</Button>
        </li>
      ))}
    </ul>
  );
};

export default List;