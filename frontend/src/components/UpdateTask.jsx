import React, { useEffect } from "react";
import { useUpdateTaskMutation } from "../api/todoApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setFieldValue,
  populateFieldValues,
  resetForm,
} from "../slices/formSlice";

const UpdateTask = ({ todo, closeForm }) => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.form);

  const [updateTask, { isLoading, isError, isSuccess }] =
    useUpdateTaskMutation();

  useEffect(() => {
    dispatch(populateFieldValues(todo));
  }, [dispatch, todo]);

  useEffect(() => {
    if (isSuccess) {
      alert("Task Updated Successfully");
    }
    if (isError) {
      alert("Error updating task");
    }
  }, [isSuccess, isError]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setFieldValue({ name, value }));
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
        <div className="flex flex-col md:col-span-2">
          <label className="text-gray-700 font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Job Title Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-gray-700 font-semibold text-sm mb-1">
            Job Title:
          </label>
          <select
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 bg-white text-gray-700"
          >
            <option value="">Select Job Title</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="QA Tester">QA Tester</option>
            <option value="IT Support Specialist">IT Support Specialist</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold">Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Enter your salary"
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
      </form>
    </div>
  );
};

export default UpdateTask;
