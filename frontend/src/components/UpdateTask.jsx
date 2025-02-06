import React, { useState } from "react";
import { useUpdateTaskMutation } from "../api/todoApi";
import { useDispatch, useSelector } from "react-redux";
import { updateField, setFormData, resetForm } from "../slices/formSlice";
const UpdateTask = ({ todo, closeForm }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const [updateTask, { isLoading, isError, isSuccess }] =
    useUpdateTaskMutation();

  useEffect(() => {
    dispatch(setFormData(todo));
  }, [dispatch, todo]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateField({ name, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask({ id: todo._id, data: formData });
      dispatch(resetForm());
      closeForm();
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  return (
    <div className="p-6 border-t border-gray-300 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Task</h3>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your age"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">
            Describe Yourself in one word:
          </label>
          <input
            type="text"
            name="describeYourself"
            value={formData.describeYourself}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your age"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 disabled:bg-green-300"
          >
            {isLoading ? "Updating..." : "Save"}
          </button>
          <button
            type="button"
            onClick={closeForm}
            className="bg-gray-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105"
          >
            Cancel
          </button>
        </div>

        {isSuccess && (
          <p className="text-green-600 font-medium text-center mt-3">
            Task updated successfully!
          </p>
        )}
        {isError && (
          <p className="text-red-500 font-medium text-center mt-3">
            Error updating task
          </p>
        )}
      </form>
    </div>
  );
};

export default UpdateTask;
