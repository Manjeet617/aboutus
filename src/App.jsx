import React from 'react';
import './App.css';
import Layout from "./components/Layout";
import AboutUsM from './components/AboutUsM';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from './components/Nav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Nav/>
      <Layout />
    </>
  },
  {
    path: "/aboutus",
    element: <>
      <Nav/>
      <AboutUsM />
    </>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;