import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { MobileDrawer, RequiresAuth } from "./components";
import {
  History,
  Liked,
  Login,
  Logout,
  Playlist,
  Signup,
  SinglePlaylist,
  SingleVideoPage,
  VideoListing,
  Watchlater,
} from "./pages";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        theme="light"
        position="bottom-right"
        autoClose={2000}
        newestOnTop={true}
        closeOnClick
        pauseOnHover={false}
      />
      <Routes>
        <Route path="/logout" element={<Logout />} />
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
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route path="/singlevideopage/:_id" element={<SingleVideoPage />} />
        <Route
          path="/singleplaylist/:playlistId"
          element={<SinglePlaylist />}
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
      </Routes>
      <MobileDrawer />
    </div>
  );
}

export default App;
