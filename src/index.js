import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import state from "./state";
import { addPost } from "./state";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(state, addPost);
