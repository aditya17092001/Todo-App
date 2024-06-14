import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Singup";
import { Todo } from "./components/Todo";
import { Todos } from "./pages/Todos";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter> */}
      <Todos/>
    </>
  );
}

export default App;
