import styled from "styled-components";
import type { Todo } from "./TodoList";
interface TaskPropsType {
  todos: Todo[];
  handleChecked: (checkedId: string) => void;
}
const TaskList = (props: TaskPropsType) => {
  const { todos, handleChecked } = props;
  const incompleteTodos = todos.filter((task) => !task.done);
  const completedTodos = todos.filter((task) => task.done);
  return (
    <div>
      {incompleteTodos.length > 0 && (
        <div>
          <h2>Incomplete Tasks</h2>
          <ul>
            {incompleteTodos.map((task) => (
              <StyledLi key={task.id}>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleChecked(task.id)}
                />
                <p>{task.task}</p>
                <StyledSpan>
                  <button>edit</button>
                  <button>remove</button>
                </StyledSpan>
              </StyledLi>
            ))}
          </ul>
        </div>
      )}
      {completedTodos.length > 0 && (
        <div>
          <h2>Incomplete Tasks</h2>
          <ul>
            {completedTodos.map((task) => (
              <StyledLi key={task.id}>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleChecked(task.id)}
                />
                <p className="done">{task.task}</p>
                <StyledSpan>
                  <button>edit</button>
                  <button>remove</button>
                </StyledSpan>
              </StyledLi>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList;
const StyledSpan = styled.span`
  display: flex;
  gap: 1rem;
`;
const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  .done {
    text-decoration: line-through;
  }
`;
