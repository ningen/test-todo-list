
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

interface AddTodoFormProps {
  addTodo: (text: string) => void;
}

export function AddTodoForm({ addTodo }: AddTodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
