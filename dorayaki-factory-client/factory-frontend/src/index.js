import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Recipes from './pages/Recipes'
import LoginForm from './pages/Login';
import RegisForm from './pages/Register';
import DetailResep from './pages/DetailResep';
import TambahResep from './pages/TambahResep';
import Ingredients from './pages/Ingredients';
import About from './pages/About';
import TambahBahan from './pages/TambahBahan';
import Request from './pages/Request';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3300/'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registrasi" element={<RegisForm />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/detailresep" element={<DetailResep />} />
        <Route path="/tambahresep" element={<TambahResep />} />
        <Route path="/ingredients" element={<Ingredients/>} />
        <Route path="/tambahbahan" element={<TambahBahan/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/request" element={<Request/>} />
      </Routes>
    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
