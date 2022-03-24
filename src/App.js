import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import Calculator from './components/Calculator';

import './style/App.css';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import FrontPage from './components/FrontPage';

const App = () => (
  <>
    <header>
      <Frontpage />
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
