import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Todo } from './components/Todo';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Signin/>}/>
          <Route path = "/signin" element = {<Signin/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Todo title={"GYM"} description={'Have to attend the GYM tomorrow'} createdAt= {'2024-06-11T18:31:35.380Z'} completed = {false}/> */}
    </>
  )
}

export default App;
