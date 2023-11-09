import React, { useEffect, useState } from 'react';
import '../styles/Input.css'
import { Button } from '@mui/material';
import { AddTask } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { RestartAlt } from '@mui/icons-material';

const Formulaire = ({ onAddTodo, onUpdateTodo, todoToEdit,searchTodo, resetSearch}) => {
    const [work, setWork] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [searchDate,setSearchDate]=useState('')
    const [isUpdate,setIsupdate]=useState(false);
    // const [action, setAction] = useState('add');
  
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

  //   const handleAddTodo = (e) => {
  //   e.preventDefault();
  //   if (action === 'add') {
  //     onAddTodo({
  //       work,
  //       description,
  //       date
  //     });
  //     setWork('');
  //     setDescription('');
  //     setDate('');
  //   } else if (action === 'update') {
  //     onUpdateTodo({
  //       work,
  //       description,
  //       date
  //     });
  //     setWork('');
  //     setDescription('');
  //     setDate('');
  //     setAction('add');
  //   }
  // };
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
          setIsupdate(true);
        } else {
          onAddTodo(updatedTodo);
          setIsupdate(true)
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
      {isUpdate?(<Button type="submit" variant='contained'>Update</Button>):
      <Button type="submit" variant='contained' endIcon={<AddTask/>} >Add</Button>}
      <div className='search-container' >
          <input
            type="date"
            placeholder="Date de recherche"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
          <Button variant='contained' type="submit" endIcon={<Search/>} onClick={handleSearchTodo}>
            Search by Date
          </Button>
          <Button variant='contained' type="button" endIcon={<RestartAlt/>} onClick={handleResetSearch}>
            Reset search
          </Button>
        </div>
    </form>
  );
};

export default Formulaire;
