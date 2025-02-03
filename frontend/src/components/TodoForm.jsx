import React from "react";

const TodoForm = () => {
  return (
    <div>
      <h1>Todo App</h1>

      <form>
        <label>Enter Name</label>
        <input type="text" name="name" />

        <label>Enter E-mail</label>
        <input type="text" name="email" />

        <label>Age</label>
        <input type="text" name="age" />

        <label>Describe Yourself</label>
        <textarea name="describeYourself" />

        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default TodoForm;
