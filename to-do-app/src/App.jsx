import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage'
import InformationPage from './pages/InformationPage/InformationPage';
import ToDoPage from './pages/ToDoPage/ToDoPage';
import Header from './header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/informationpage" element={<InformationPage />} />
        <Route path="/todopage" element={<ToDoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
