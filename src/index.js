import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { PlaylistModalProvider, PlaylistProvider } from "./context";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PlaylistProvider>
          <PlaylistModalProvider>
            <App />
          </PlaylistModalProvider>
        </PlaylistProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
