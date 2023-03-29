import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Edit from './components/Edit.js';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Description from './components/Description.js';

const Applayout = () => (
   <>
   <Navbar />
   <Home />
   </>
)

const approuter = createBrowserRouter([
   {
      path: '/',
      element: <Applayout/>,
   },
   {
      path: '/new',
      element: <Register/>,
   },
   {
      path: '/edit/:id',
      element: <Edit/>,
   },
   {
      path: '/view/:id',
      element: <Description/>,
   }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter} />);