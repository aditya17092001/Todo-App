import { ShowStart } from "../components/ShowStart";
import { Todo } from "../components/Todo";
import { Topbar } from "../components/Topbar";

export const Todos = () => {
    const todo = [
        {
            "_id": "666897f73a291c96e6d37d31",
            "userId": "666873f06c805ef975cea41d",
            "title": "Attend",
            "description": "Have to attend the college tomorrow",
            "createdAt": "2024-06-11T18:31:19.868Z",
            "completed": false,
            "__v": 0
          },
          {
            "_id": "666898073a291c96e6d37d33",
            "userId": "666873f06c805ef975cea41d",
            "title": "GYM",
            "description": "Have to attend the GYM tomorrow",
            "createdAt": "2024-06-11T18:31:35.380Z",
            "completed": true,
            "__v": 0
          },
          {
            "_id": "666897f73a291c96e6d37d31",
            "userId": "666873f06c805ef975cea41d",
            "title": "Attend",
            "description": "Have to attend the college tomorrow",
            "createdAt": "2024-06-11T18:31:19.868Z",
            "completed": false,
            "__v": 0
          },
          {
            "_id": "666898073a291c96e6d37d33",
            "userId": "666873f06c805ef975cea41d",
            "title": "GYM",
            "description": "Have to attend the GYM tomorrow",
            "createdAt": "2024-06-11T18:31:35.380Z",
            "completed": true,
            "__v": 0
          },
          {
            "_id": "666897f73a291c96e6d37d31",
            "userId": "666873f06c805ef975cea41d",
            "title": "Attend",
            "description": "Have to attend the college tomorrow",
            "createdAt": "2024-06-11T18:31:19.868Z",
            "completed": false,
            "__v": 0
          },
          {
            "_id": "666898073a291c96e6d37d33",
            "userId": "666873f06c805ef975cea41d",
            "title": "GYM",
            "description": "Have to attend the GYM tomorrow",
            "createdAt": "2024-06-11T18:31:35.380Z",
            "completed": true,
            "__v": 0
          }
    ];
    // const todo = [];
    return (
        <div>
            <Topbar/>
            {todo.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {todo.map((data) => (
                    <Todo key={data._id} data={data} />
                ))}
            </div> : <ShowStart/>}
        </div>
    )
}