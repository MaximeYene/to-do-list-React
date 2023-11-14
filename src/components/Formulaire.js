import React, { useEffect, useState } from 'react';
import '../styles/Input.css'
import { Button } from '@mui/material';
import { AddTask } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { RestartAlt } from '@mui/icons-material';
import { Update } from '@mui/icons-material';

const Formulaire = ({todos, setTodos, onAddTodo, onUpdateTodo, todoToEdit,searchTodo, resetSearch}) => {
    const [work, setWork] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [searchDate,setSearchDate]=useState('')
    const [isUpdate, setIsUpdate] = useState(!!todoToEdit);
  
    useEffect(() => {
      if (todoToEdit) {
        setWork(todoToEdit.work);
        setDescription(todoToEdit.description);
        setDate(todoToEdit.date);
        setIsUpdate(true)
      }else{
        setIsUpdate(false)
      }
    }, [todoToEdit]);
  
    const handleWorkChange = (event) => {
      setWork(event.target.value);
    };

    // vérification s'il existe des tâches dans le stockage local au chargement initial de la page
    const handleUpdateTodo = (updatedTodo) => {
      if (isUpdate && todoToEdit) {
        // Mise à jour de la tâche
        onUpdateTodo({
          ...todoToEdit,
          work: updatedTodo.work,
          description: updatedTodo.description,
          date: updatedTodo.date
        });
      }
      else {
        // ajout d'une nouvelle tâche
         onAddTodo(updatedTodo);
      }
    
      // Réinitialisation les valeurs après la mise à jour
      setWork('');
      setDescription('');
      setDate('');
      setIsUpdate(false);
    };
  
    // Récupération des todos du stockage local lors du chargement initial
    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos'));
      if (savedTodos) {
        setTodos(savedTodos);
      }
    }, [setTodos]);
  

    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const updatedTodo = { work, description, date };
    
      if (work.trim() === '' || description.trim() === '' || date.trim() === '') {
        alert('Veuillez remplir tous les champs');
      } else {
        handleUpdateTodo(updatedTodo);
        // Utilisation de la fonction pour mettre à jour la tâche
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
      <Button type="submit" variant='contained' endIcon={isUpdate ? <Update /> : <AddTask />}>
        {isUpdate ? "Update" : "Add"}
      </Button>
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
