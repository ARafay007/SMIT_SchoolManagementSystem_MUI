import { Routes, Route } from "react-router";
import { Login, SignUp, StudentsList, TeachersList } from './pages';
import Layout from "./components/Layout";

function App (){

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path='/' element={<Layout />}>
        <Route path='/studentsList' element={<StudentsList />} />
        <Route path='/teachersList' element={<TeachersList />} />
      </Route>
    </Routes>
  );
};

export default App;