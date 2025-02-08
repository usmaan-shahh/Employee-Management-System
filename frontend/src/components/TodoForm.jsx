import { useAddTodosMutation } from "../api/todoApi";
import { setFieldValue, resetForm } from "../slices/formSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoForm = () => {
  const [addTodos] = useAddTodosMutation();

  const dispatch = useDispatch();

  const formData = useSelector((state) => state.form);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setFieldValue({ name, value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addTodos(formData);
    dispatch(resetForm());
  };

  return (
    <div className="max-w-2xl w-full mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-2xl hover:shadow-blue-100/40 transition-shadow duration-300 border border-blue-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Employee Management System
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        {/* Name Input */}
        <div className="flex flex-col space-y-1">
          <label className="text-gray-700 font-semibold text-sm mb-1">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 placeholder-gray-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col space-y-1 ">
          <label className="text-gray-700 font-semibold text-sm mb-1">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 placeholder-gray-400"
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

        {/* Salary Input */}
        <div className="flex flex-col space-y-1">
          <label className="text-gray-700 font-semibold text-sm mb-1">
            Salary:
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              $
            </span>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 placeholder-gray-400"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
          >
            Submit
            <span className="ml-2 opacity-90">→</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
