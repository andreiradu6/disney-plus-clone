import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Detail from './components/Detail';

function App() {
  return (
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
