import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import storage from "./state";

const rerenderEntireTree = (state, addPost) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <App state={storage.state} addPost={storage.addPost.bind(storage)} />
    </BrowserRouter>
  );
};

rerenderEntireTree();

storage.subscribe(rerenderEntireTree);
