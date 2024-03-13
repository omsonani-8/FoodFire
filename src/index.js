import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Navigator/About";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const approuter = createBrowserRouter([
//   {
// 	path : "/",
// 	element : <App/>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
// ]);

root.render(<BrowserRouter>
<App/>
</BrowserRouter>
);
