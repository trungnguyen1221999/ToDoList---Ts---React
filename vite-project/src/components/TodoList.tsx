import { useEffect, useState } from "react";
import Add from "./Add";
import { Container } from "./Container";
import TaskList from "./TaskList";

export interface Todo {
  id: string;
  task: string;
  done: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const store = localStorage.getItem("todos");
    return store ? JSON.parse(store) : [];
  });
  const [input, setInput] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const [edited, setEdited] = useState(false);
  const [selectedId, setSelectedID] = useState<string>("");
  const handleSaveinLocalStorage = (todos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  useEffect(() => {
    handleSaveinLocalStorage(todos);
  }, [todos]);

  const handleRemove = (idRemove: string) => {
    const newTodos = todos.filter((todo) => todo.id !== idRemove);
    setTodos(newTodos);
  };

  const handleEdit = (idEdit: string) => {
    todos.map((todo) => {
      if (todo.id === idEdit) setInput(todo.task);
    });
    setEdited(true);
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
  const handleEditSubmit = (editInput: string, editId: string) => {
    todos.map((todo) => {
      if (todo.id === editId) todo.task = editInput;
    });
    setEdited(false);
    setInput("");
  };
  console.log(todos);
  return (
    <Container>
      <Add
        input={input}
        handleInput={handleInput}
        handleAdd={handleAdd}
        edited={edited}
        setEdited={setEdited}
        handleEditSubmit={handleEditSubmit}
        handleEdit={handleEdit}
        selectedId={selectedId}
        handleSaveinLocalStorage={handleSaveinLocalStorage}
        todos={todos}
      />
      <TaskList
        handleChecked={handleChecked}
        todos={todos}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
        setSelectedID={setSelectedID}
        handleSaveinLocalStorage={handleSaveinLocalStorage}
      />
    </Container>
  );
};

export default TodoList;
