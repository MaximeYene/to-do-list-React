import React, { useState } from 'react';
import Formulaire from './components/Formulaire';
import List from './components/List';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);

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

  const searchTodo = (date) => {
    const filteredTodos = todos.filter((todo) => todo.date === date);
    setTodos(filteredTodos);
  };


  return (
    <div className='container' >
      <h1>Todo List</h1>
      <Formulaire onAddTodo={addTodo}
        onUpdateTodo={updateTodo}
        todoToEdit={todoToEdit}
        searchTodo={searchTodo}
        todos={todos}
        />
      <List
        todos={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
      />
    </div>
  );
};

export default App;
