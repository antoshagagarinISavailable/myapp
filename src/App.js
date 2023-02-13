import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Main from "./components/Main/Main.jsx";
import Wall from "./components/Wall/Wall.jsx";
import Ads from "./components/Ads/Ads.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
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
            element={<Dialogs state={props.state.dialog} />}
          />

          <Route
            path="/wall"
            element={
              <Wall
                userName="antoshagagarin"
                state={props.state.wall}
                addPost={props.addPost}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
