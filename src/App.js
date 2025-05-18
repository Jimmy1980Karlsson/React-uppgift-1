import React from "react";
import logo from './logo.svg'; 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css"; 

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <main>
        <h1>Välkommen till React-applikationen!</h1>
         <div className="logo-container"></div>
         <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;

