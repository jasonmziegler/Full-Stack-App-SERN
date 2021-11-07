// import logo from './logo.svg';
// import './styles/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Public from './components/Public';
import UserSignIn from "./components/UserSignIn";

const App = () => (
  <Router>
    <div>
    <Routes>
      <Route exact path="/" element={<Public />}/>
      <Route path="/signin" element={<UserSignIn/>}/>
    </Routes>
    </div>
  </Router>
);

export default App;
