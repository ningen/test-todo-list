
import { AnimatePresence } from 'framer-motion';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <div className="space-y-2">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
