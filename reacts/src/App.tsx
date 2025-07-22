import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todoText: string) {
    setTodos((prev) => [new Todo(todoText), ...prev]);
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
