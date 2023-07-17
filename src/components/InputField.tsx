import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
// const InputField: React.FC<Props> = (props) => // we can write like this also
const InputField = (props: Props) => {
  const { todo, setTodo, handleAdd } = props;
  return (
    <form onSubmit={handleAdd}>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type='submit'>ADD</button>
    </form>
  );
};

export default InputField;
