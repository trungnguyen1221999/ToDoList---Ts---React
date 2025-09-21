import { IoMdAdd } from "react-icons/io";
interface AddPropsType {
  input: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: (input: string) => void;
}
const Add = (props: AddPropsType) => {
  const { input, handleInput, handleAdd } = props;
  return (
    <div>
      <h1>To Do List</h1>
      <form action="">
        <input type="text" onChange={(e) => handleInput(e)} value={input} />
        <button
          onClick={(e) => {
            handleAdd(input);
            e.preventDefault();
          }}
        >
          <IoMdAdd />
        </button>
      </form>
    </div>
  );
};

export default Add;
