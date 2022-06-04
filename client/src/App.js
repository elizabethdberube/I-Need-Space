import React, { useState, useEffect, Component } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from "./components/home/Home";

import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Picture from "./components/Picture";
import Camera from "./components/Camera";
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

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ApolloProvider client={client}>

      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Rover" element={<Rover />} />

            <Route path="/Camera" element={<Camera />} />
            <Route path="/Picture" element={<Picture />} />

            <Route path="/Login" element={<Login />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </div>
      </Router>
    </ApolloProvider >
  );
}

export default App; 