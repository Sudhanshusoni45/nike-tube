import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes></Routes>
    </div>
  );
}

export default App;
