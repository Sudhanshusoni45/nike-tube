import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MobileDrawer, Navbar } from "./components";
import logo from "./logo.png";
import { VideoListing } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
      </Routes>
      <MobileDrawer />
    </div>
  );
}

export default App;
