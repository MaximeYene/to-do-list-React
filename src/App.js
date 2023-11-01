import React, { useState } from 'react';
import TodoForm from './components/Formulaire';
import TodoItems from './components/List';
import './App.css'

const TodoList = () => {
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


  const sortTodosByDate = () => {
    const sortedTodos = [...todos].sort((a, b) =>
      a.date.localeCompare(b.date)
    );
    setTodos(sortedTodos);
  };

  return (
    <div className='container' >
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} onSortTodo={sortTodosByDate}
        onUpdateTodo={updateTodo}
        todoToEdit={todoToEdit}/>
      <TodoItems
        todos={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
      />
    </div>
  );
};

export default TodoList;
