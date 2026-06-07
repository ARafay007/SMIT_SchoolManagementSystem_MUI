import { Routes, Route } from "react-router";
import { Login, SignUp } from './pages';

function App (){

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;