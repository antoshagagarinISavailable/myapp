import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Main from "./components/Main/Main.jsx";
import WallContainer from "./components/Wall/WallContainer";
import Ads from "./components/Ads/Ads.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Ads />
      <div className="contentWrapper">
        <Routes>
          <Route
            path="/dialogs"
            element={<DialogsContainer store={props.store} />}
          />

          <Route path="/wall" element={<WallContainer store={props.store} />} />
          <Route
            path="/users"
            element={<UsersContainer store={props.store} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
