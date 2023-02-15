import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import storage from "./state";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App
        state={storage}
        addPost={storage.addPost.bind(storage)}
        newPostTextUpdate={storage.newPostTextUpdate.bind(storage)}
      />
    </BrowserRouter>
  );
};

rerenderEntireTree();

storage.subscribe(rerenderEntireTree);
