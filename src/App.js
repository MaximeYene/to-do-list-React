import React, { useState } from 'react';
import TodoForm from './components/Formulaire';
import TodoItems from './components/List';
import './App.css'

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
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
      <TodoForm onAddTodo={addTodo} onSortTodo={sortTodosByDate} />
      <TodoItems
        todos={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
      />
    </div>
  );
};

export default TodoList;
