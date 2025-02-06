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
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
        Todo App
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your age"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold">
            Describe Yourself:
          </label>
          <input
            type="text"
            name="describeYourself"
            value={formData.describeYourself}
            onChange={handleChange}
            placeholder="Describe Yourself in one word"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full flex justify-center md:col-span-2">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
