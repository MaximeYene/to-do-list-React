import React, { useEffect, useState } from 'react';
import '../styles/Input.css'

const Formulaire = ({ onAddTodo, onUpdateTodo, todoToEdit,searchTodo}) => {
    const [work, setWork] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [searchDate,setSearchDate]=useState('')
    const [isUpdate,setIsupdate]=useState(false);
  
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

    const toggleButton=()=>{
      setIsupdate(!isUpdate);
    }
  
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
    
    const handleSearchTodo = (e) => {
      e.preventDefault();
      searchTodo(searchDate);
      setSearchDate('');
    };
  

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
      <button type="submit" onClick={toggleButton} >{isUpdate?'Update':'Add'}</button>
      <div>
          <input
            type="date"
            placeholder="Date de recherche"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
          <button type="submit" onClick={handleSearchTodo}>
            Rechercher par date
          </button>
        </div>
    </form>
  );
};

export default Formulaire;
