import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./state";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const rerenderEntireTree = (state, addPost) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  );
};

rerenderEntireTree();
