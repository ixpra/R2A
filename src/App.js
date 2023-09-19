import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/home';
import Roadmaps from './pages/roadmaps';
import About from './pages/about';
import Recruit from './pages/recruit'
import Advanced from './pages/advanced'
import Prestige from './pages/prestige'








function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/home"  Component={Home} />
        <Route path="/roadmaps"  Component={Roadmaps} />
        <Route path="/about"  Component={About} />
        <Route path="/recruit"  Component={Recruit} />
        <Route path="/advanced"  Component={Advanced} />
        <Route path="/prestige"  Component={Prestige} />
      </Routes>
    </Router>
  );
}



export default App;
