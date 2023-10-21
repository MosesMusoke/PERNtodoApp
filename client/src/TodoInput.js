import React, { useState } from 'react';

function TodoInput() {
  const [todo, setTodo] = useState('');

  const handleAddTodo = async () => {
    // POST request to add todo to the backend
    try {
      await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: todo }),
      });
      // Refreshing the todos
      window.location = '/'

    } catch (error) {

      console.error('Error adding todo:', error);

    }
    setTodo('');
  };

  return (
    <div className="mb-4 flex text-black items-center justify-center w-100 h-100 text-center">
      <input
        type="text"
        placeholder="Add a new todo"
        className="w-3/4 p-2 rounded"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="bg-blue-500 w-200 text-white p-2 rounded ml-2"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;

