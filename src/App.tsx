import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./modal";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        { id: Date.now(), todo, isDone: false, isEditable: false },
      ]);
      setTodo("");
    }
  };
  return (
    <>
      <h1>{todo}</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoList={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
