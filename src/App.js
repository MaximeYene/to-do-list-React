import React, { useState } from 'react';
import Formulaire from './components/Formulaire';
import List from './components/List';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [searchDate,setSearchDate]=useState('');

  const editTodo = (index, todo) => {
    setTodoToEdit(todo);
  };


  const updateTodo = (updatedTodo) => {
    const index = todos.findIndex((todo) => todo === todoToEdit);
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
    setTodoToEdit(null);
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };


  const sortTodosByDate = () => {
    const sortedTodos = [...todos].sort((a, b) =>
      a.date.localeCompare(b.date)
    );
    setTodos(sortedTodos);
  };

  return (
    <div className='container' >
      <h1>Todo List</h1>
      <Formulaire onAddTodo={addTodo} 
        onSortTodo={sortTodosByDate}
        onUpdateTodo={updateTodo}
        todoToEdit={todoToEdit}
        onSortBydate={sortTodosByDate}
        searchDate={searchDate}
        onSearchDateChange={setSearchDate}
        />
        <button onClick={sortTodosByDate}>Rechercher par date</button>
      <List
        todos={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
        searchDate={searchDate}
      />
    </div>
  );
};

export default App;
