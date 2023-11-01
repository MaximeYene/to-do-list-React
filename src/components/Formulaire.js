import React, { useState } from 'react';
import '../styles/Input.css'

const TodoForm = ({ onAddTodo, onSortTodo }) => {
  const [work, setWork] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleWorkChange = (event) => {
    setWork(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { work, description, date };
    onAddTodo(newTodo);
    setWork('');
    setDescription('');
    setDate('');
  };

  const handleSortTodo=()=>{
    onSortTodo();
  }

  return (
    <form onSubmit={handleSubmit} className='container-form'>
      <div>
        <label>Travail :</label>
        <input type="text" value={work} onChange={handleWorkChange} required />
      </div>
      <div>
        <label>Description :</label>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <div>
        <label>Date :</label>
        <input type="date" value={date} onChange={handleDateChange} required />
      </div>
      <button type="submit">Ajouter</button>
      <button onClick={handleSortTodo}>Trier par date</button>
    </form>
  );
};

export default TodoForm;
