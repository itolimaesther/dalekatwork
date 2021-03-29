import React, { useState } from "react";
import './App.css';
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [mode, setMode] = useState("app");

  
  const handleChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div className="grid-container">
      <div className="menu-icon">
        <MenuIcon className="header__menu" />
      </div>

      {/* header */}

      <header className="header">
        <div className="toggle__menu">
        <label className="app__label" htmlFor="app">
            <input
              id="admin"
              type="radio"
              value="app"
              name="app"
              checked={mode === "app"}
              onChange={handleChange}
            />
            App mode
          </label>
          <label className="admin__label" htmlFor="admin">
            <input
              id="admin"
              type="radio"
              value="admin"
              name="admin"
              checked={mode === "admin"}
              onChange={handleChange}
            />
            Admin mode
          </label>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar mode={mode} />

      {/* main */}
      <main className={`main  ${mode === 'app' ? "main":"main__bg"}`}>
        <div className="overview">
          <h1> Welcome to Dillali</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
