import React from "react";
const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Title:</label>
      <input type="text" name="title" onChange={handleChange} />
      <br />
      <br />
      <label>Enter Description:</label>
      <textarea name="textarea " onChange={handleChange} />
      <br />
      <br />
      <label>Enter Due Date:</label>
      <input type="date" onChange={handleChange} />
      <br />
      <br />
      <label>Completed:</label>
      <select onChange={handleChange}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <br />
      <br />
      <label>priority:</label>
      <select onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </form>
  );
};

export default FormPage;
