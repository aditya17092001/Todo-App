export const Delete = ({ toggleDelete, data }) => {
  const { title, description, createdAt, completed, _id } = data;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-1/3 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Delete Todo</h2>
            <div className="pb-5">
                <div className=" font-bold">{title}</div>
                <div>{description}</div>
            </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={toggleDelete}
            >
              {" "}
              Cancel{" "}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={toggleDelete}
            >
              {" "}
              Delete{" "}
            </button>
          </div>
      </div>
    </div>
  );
};
