import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style/App.css';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import Header from './pages/Header';

const App = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </main>
  </>
);

export default App;
