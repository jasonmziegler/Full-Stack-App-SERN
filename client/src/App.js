// import logo from './logo.svg';
// import './styles/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

//import Public from './components/Public';
import Courses from './components/Courses'
import Header from './components/Header';
import NotFound from "./components/NotFound";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import UserSignOut from "./components/UserSignOut";
import CreateCourse from "./components/CreateCourse";
import UpdateCourse from "./components/UpdateCourse";
import withContext from './Context';

const UserSignUpWithContext = withContext(UserSignUp);
const CoursesWithContext = withContext(Courses);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

const App = () => (
  <Router>
    <div>
      <Header/>
    <Routes>
    <Route exact path="/" element={<CoursesWithContext />}/>
    <Route exact path="/create-course" element={<CreateCourseWithContext />}/>
    <Route exact path="/update-course/:id" element={<UpdateCourseWithContext />}/>
      <Route path="/signin" element={<UserSignIn/>}/>
      <Route path="/signup" element={<UserSignUpWithContext/>}/>
      <Route path="/signout" element={<UserSignOut/>}/>
      <Route component={NotFound} />
    </Routes>
    </div>
  </Router>
);

export default App;
