import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'

// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='experience' element={<Experience/>}/>
      <Route path='testimonial' element={<Testimonial/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
