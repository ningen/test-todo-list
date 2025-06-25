import { useState } from 'react';
import type { MetaFunction } from '@remix-run/node';
import { AddTodoForm } from '~/components/AddTodoForm';
import { TodoList } from '~/components/TodoList';

export const meta: MetaFunction = () => {
  return [
    { title: 'Todo App' },
    { name: 'description', content: 'A simple todo application.' },
  ];
};

export default function Index() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Remix', completed: false },
    { id: 2, text: 'Build a todo app', completed: true },
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}