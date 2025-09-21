import { IoMdAdd } from "react-icons/io";
interface AddPropsType {
  input: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: (input: string) => void;
  edited: boolean;
  setEdited: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditSubmit: (editInput: string, editId: string) => void;
  handleEdit: (idEdit: string) => void;
  selectedId: string;
}
const Add = (props: AddPropsType) => {
  const {
    input,
    handleInput,
    handleAdd,
    edited,
    handleEditSubmit,
    selectedId,
  } = props;
  return (
    <div>
      <h1>To Do List</h1>
      <form action="">
        <input type="text" onChange={(e) => handleInput(e)} value={input} />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!edited) handleAdd(input);
            else {
              handleEditSubmit(input, selectedId);
            }
          }}
        >
          <IoMdAdd />
        </button>
      </form>
    </div>
  );
};

export default Add;
