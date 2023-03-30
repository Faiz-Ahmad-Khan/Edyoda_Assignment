import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import ModulesPage from './components/ModulesPage';
import InstructorPage from './components/InstructorPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/instructor" element={<InstructorPage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
