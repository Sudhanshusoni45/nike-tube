import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  HistoryProvider,
  LikedContextProvider,
  PlaylistModalProvider,
  PlaylistProvider,
  WatchlaterProvider,
} from "./context";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LikedContextProvider>
          <WatchlaterProvider>
            <PlaylistProvider>
              <PlaylistModalProvider>
                <HistoryProvider>
                  <App />
                </HistoryProvider>
              </PlaylistModalProvider>
            </PlaylistProvider>
          </WatchlaterProvider>
        </LikedContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
