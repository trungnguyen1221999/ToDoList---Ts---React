import { useState } from "react";
import Add from "./Add";
import { Container } from "./Container";
import TaskList from "./TaskList";

export interface Todo {
  id: string;
  task: string;
  done: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [checked, setChecked] = useState(false);

  const handleRemove = (idRemove: string) => {
    const newTodos = todos.filter((todo) => todo.id !== idRemove);
    setTodos(newTodos);
  };
  const handleChecked = (checkedId: string) => {
    setChecked(!checked);
    todos.map((todo) => {
      if (todo.id === checkedId) todo.done = !todo.done;
    });
  };
  const handleAdd = (input: string) => {
    if (input.trim() === "") return;
    const newTask: Todo = {
      id: Date.now().toString(),
      task: input,
      done: false,
    };
    setTodos((prev) => [...prev, newTask]);
    setInput("");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  console.log(todos);
  return (
    <Container>
      <Add input={input} handleInput={handleInput} handleAdd={handleAdd} />
      <TaskList
        handleChecked={handleChecked}
        todos={todos}
        handleRemove={handleRemove}
      />
    </Container>
  );
};

export default TodoList;
