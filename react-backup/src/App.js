import logo from './logo.svg';
import "./App.css";
import Header from './Components/Layout/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/scss/master.scss';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import MainContent from './Components/MainContent';
import Login from './Components/Login/Login';
import React, { Component } from "react";

import "./css/scss/master.scss";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />}>
    //       <Route path="blogs" element={<MainContent />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <MainContent />
  );
}

export default App;

