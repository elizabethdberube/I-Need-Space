import React, { useState, useEffect, Component } from "react";
import Home from "./components/home/Home";

import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Picture from "./components/Picture";
 michael-branch4
import Rover from "./components/Rover";


import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));



import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rover" element={<Rover />} />




          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App; 