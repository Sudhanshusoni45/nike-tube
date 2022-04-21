import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  LikedContextProvider,
  PlaylistProvider,
  WatchlaterProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LikedContextProvider>
          <WatchlaterProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </WatchlaterProvider>
        </LikedContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
