
import { motion } from 'framer-motion';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex items-center gap-2 p-2 border-b"
    >
      <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
      <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>
        {todo.text}
      </span>
      <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)}>
        X
      </Button>
    </motion.div>
  );
}
