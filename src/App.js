import React from "react";
import "./App.css";
import WallContainer from "./components/Wall/WallContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="dialogs"
            element={<DialogsContainer store={props.store} />}
          />

          <Route path="wall" element={<WallContainer store={props.store} />} />
          <Route
            path="users"
            element={<UsersContainer store={props.store} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
