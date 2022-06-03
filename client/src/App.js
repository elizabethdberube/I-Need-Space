import React from "react";
import Home from "./components/home/Home";
import Project from "./components/Project";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));



function App() {
  return (

    <>
      <Home />

      <Navbar />
      <Preloader />
    </>



  );
}

export default App;