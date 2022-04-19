import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MobileDrawer, Navbar, RequiresAuth } from "./components";
import logo from "./logo.png";
import { Liked, Login, Signup, VideoListing, Watchlater } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <Watchlater />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <Liked />
            </RequiresAuth>
          }
        />
      </Routes>
      <MobileDrawer />
    </div>
  );
}

export default App;
