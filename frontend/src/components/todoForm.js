import React from "react";

const todoForm = () => {
  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input type="text" onChange={handleChange} name="name" />

        <label>Enter E-mail</label>
        <input type="text" onChange={handleChange} name="email" />

        <label>Age</label>
        <input type="text" onChange={handleChange} name="age" />

        <label>Describe Yourself</label>
        <textarea onChange={handleChange} name="describeYourself" />

        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default todoForm;
