import React, { useState } from 'react';

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.description);

  const handleEdit = async() => {
    // Handling editing logic and sending changes to the backend
    try {
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ description:editedText }),
      })
      window.location = '/'

    } catch (err) {
      console.error(err.message)
    }

  };

  const handleDelete = async () => {
    // Handling deletion logic and updating the state
    try {
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method:'DELETE',
      })

      window.location = '/'

    } catch (error) {
      console.error(error.message)
    }

  };

  return (
    <li className="mb-2 ">
      {isEditing ? (
        <div>
          <input
            className='text-black flex-1 mr-11'
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div className='flex justify-center items-center w-full'>
          <h4 className='flex-1 '>{todo.description}</h4>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button className="text-red-500" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;

