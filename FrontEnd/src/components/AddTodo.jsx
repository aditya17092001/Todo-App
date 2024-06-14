import { InputBox } from "./InputBox";

export const AddTodo = ({ toggleAddTodo }) => {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-8 shadow-lg w-1/3 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
          <form>
            <div className="mb-4">
              <InputBox label={"Title"} placeholder={"Title"}/>
            </div>
            <div className="mb-4">
                Description
              <textarea className="w-full px-2 py-1 border rounded border-slate-200" placeholder="Description" style={{height:"160px"}}
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={toggleAddTodo}
              > Add </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={toggleAddTodo}
              > Cancel </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  