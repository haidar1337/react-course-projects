import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (todoText: string) => void }> = (
  props
) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    const entered = todoInputRef.current!.value;

    if (entered.trim().length === 0) return;

    props.onAddTodo(entered);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" name="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
