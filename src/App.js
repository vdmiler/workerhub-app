import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import SummariesPage from './components/SummariesPage/SummariesPage';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summaries" element={<SummariesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
