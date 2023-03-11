import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Header /> */}
      </div>
    </Router>
  );
}

export default App;
