// import logo from './logo.svg';
// import './styles/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Public from './components/Public';
import Header from './components/Header';
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSignOut";


const App = () => (
  <Router>
    <div>
      <Header/>
    <Routes>
      <Route exact path="/" element={<Public />}/>
      <Route path="/signin" element={<UserSignIn/>}/>
      <Route path="/signout" element={<UserSignOut/>}/>
    </Routes>
    </div>
  </Router>
);

export default App;
