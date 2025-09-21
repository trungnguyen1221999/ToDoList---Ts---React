import styled from "styled-components";
import type { Todo } from "./TodoList";
interface TaskPropsType {
  todos: Todo[];
  handleChecked: (checkedId: string) => void;
  handleRemove: (idRemove: string) => void;
  handleEdit: (idEdit: string) => void;
  setSelectedID: React.Dispatch<React.SetStateAction<string>>;
  handleSaveinLocalStorage: (todos: Todo[]) => void;
}
const TaskList = (props: TaskPropsType) => {
  const {
    todos,
    handleChecked,
    handleRemove,
    handleEdit,
    setSelectedID,
    handleSaveinLocalStorage,
  } = props;
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
                  onChange={() => {
                    handleChecked(task.id);
                    handleSaveinLocalStorage(todos);
                  }}
                />
                <p>{task.task}</p>
                <StyledSpan>
                  <button
                    onClick={() => {
                      handleEdit(task.id);
                      setSelectedID(task.id);
                    }}
                  >
                    edit
                  </button>
                  <button onClick={() => handleRemove(task.id)}>remove</button>
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
                  onChange={() => {
                    handleChecked(task.id);
                    handleSaveinLocalStorage(todos);
                  }}
                />
                <p className="done">{task.task}</p>
                <StyledSpan>
                  <button
                    onClick={() => {
                      handleEdit(task.id);
                      setSelectedID(task.id);
                    }}
                  >
                    edit
                  </button>
                  <button onClick={() => handleRemove(task.id)}>remove</button>
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
