import React, { useEffect, useState } from 'react';
import '../styles/Input.css'

const Formulaire = ({ onAddTodo, onUpdateTodo, todoToEdit,searchDate,onSearchDateChange}) => {
    const [work, setWork] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [isUpdateTodo,setIsUpdateTodo]=useState(false);
  
    useEffect(() => {
      if (todoToEdit) {
        setWork(todoToEdit.work);
        setDescription(todoToEdit.description);
        setDate(todoToEdit.date);
      }
    }, [todoToEdit]);
  
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
      const updatedTodo = { work, description, date };
  
      if (todoToEdit) {
        onUpdateTodo(updatedTodo);
      } else {
        onAddTodo(updatedTodo);
      }
  
      setWork('');
      setDescription('');
      setDate('');
    };

    const toggleFormular=()=>{
      setIsUpdateTodo(!isUpdateTodo);
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
      <button type="submit" onClick={toggleFormular}>{isUpdateTodo ? 'Update':'Add'}</button>
      <div>
             <label htmlFor='search-date' >Rechercher par date</label>
             <input type='date' id='search-date' value={searchDate} onChange={(e)=>onSearchDateChange(e.target.value)} />
        </div>
    </form>
  );
};

export default Formulaire;
