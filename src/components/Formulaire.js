import React, { useEffect, useState } from 'react';
import '../styles/Input.css'
import { Button } from '@mui/material';

const Formulaire = ({ onAddTodo, onUpdateTodo, todoToEdit,searchTodo, resetSearch}) => {
    const [work, setWork] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [searchDate,setSearchDate]=useState('')
  
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
  
      if(work.trim()===''||description.trim()===''||date.trim()===''){
        alert('veuillez remplir tous les champs')
      }else{
        if (todoToEdit) {
          onUpdateTodo(updatedTodo);
        } else {
          onAddTodo(updatedTodo);
        }
    
        setWork('');
        setDescription('');
        setDate('');
      }
    };
    
    const handleSearchTodo = (e) => {
      e.preventDefault();
      searchTodo(searchDate);
      setSearchDate('');
    };

    const handleResetSearch = () => {
      resetSearch();
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
      <Button type="submit" variant='contained'>Add</Button>
      <div>
          <input
            type="date"
            placeholder="Date de recherche"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
          <Button variant='contained' type="submit" onClick={handleSearchTodo}>
            Rechercher par date
          </Button>
          <Button variant='contained' type="button" onClick={handleResetSearch}>
            Réinitialiser la recherche
          </Button>
        </div>
    </form>
  );
};

export default Formulaire;
