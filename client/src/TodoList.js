import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul className='w-3/4 h-100 ml-600 text-center'>
      {todos.map((todo) => (
        <TodoItem key={todo.todo_id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;

