import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact us/ContactUs'
import User from './components/User/User'
import Github  from './components/Github/Github'

const router = createBrowserRouter( [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: < Home/>
      },
      {
        path: 'about',
        element: < About />
      },
      {
        path: 'contact',
        element:  <Contact />
      },
      {
        path: 'user/:id',
        element:  <User />
      },
      { 
        // loader: {githubInfoLoader},
        path: 'github',
        element:  <Github />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   < RouterProvider router={router} /> 
  </React.StrictMode>,
)
