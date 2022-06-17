import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Equipment from "./pages/equipment/Equipment"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/equipments" element={<List/>}/>
        <Route path="/equipments/:id" element={<Equipment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;