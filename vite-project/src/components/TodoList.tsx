import Add from "./Add";
import { Container } from "./Container";
import TaskList from "./TaskList";

const TodoList = () => {
  return (
    <Container>
      <Add />
      <TaskList />
    </Container>
  );
};

export default TodoList;
