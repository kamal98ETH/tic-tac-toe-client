import './App.css';
import React from 'react';
import Home from './home';
import Game from './game';
import { HashRouter, Routes, Route } from "react-router-dom";
import SignIn from './signIn';
import SignUp from './signUp';

const App: React.FC = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
