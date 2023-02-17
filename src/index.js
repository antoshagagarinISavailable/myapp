import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import storage from "./redux/storage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App
        state={storage.getState()}
        dispatch={storage.dispatch.bind(storage)}
      />
    </BrowserRouter>
  );
};

rerenderEntireTree();

storage._callSubscriber(rerenderEntireTree);
