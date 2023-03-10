import './App.css';
import React from 'react';
import Home from './home';
import Game from './game';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {

  return (
    <BrowserRouter basename="/tic-tac-toe-client">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/game' element={<Game />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
