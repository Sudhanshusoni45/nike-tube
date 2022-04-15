import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import logo from "./logo.png";
import { VideoListing } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
      </Routes>
    </div>
  );
}

export default App;
