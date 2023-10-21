import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState([]);

  // Function to fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const data = await response.json();
      setTodos(data.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="bg-blue-100 text-white h-screen flex items-center justify-center flex-col p-4">
      <div className='w-3/4 h-full pl-3/4 p-5 bg-blue-900'>
        <h1 className="text-2xl mb-4 text-center">To-Do App</h1>
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
