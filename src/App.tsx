import './App.css';
import React from 'react';
import Home from './home';
import Game from './game';
import { HashRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/game' element={<Game />}>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
