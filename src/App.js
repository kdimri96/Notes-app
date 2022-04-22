import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css';
import Header from './component/Header';
import React, { useState } from 'react';
import { Route, Switch, Routes } from 'react-router-dom';
import Home from "./screens/Home";
import Create from "./screens/Create";
import Favorite from "./screens/Favorite";
import Notes from "./screens/Notes";
import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Create setNotes={setNotes} />} />
        <Route exact path="/favorite" element={<Favorite notes={notes} />} />
        <Route exact path="/notes" element={<Notes setNotes={setNotes} notes={notes} />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
