import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout'
import About from './Components/About/About'
import User from './Components/User/User'
import Github, {githubInfoLoader} from './Components/Github/Github'
import Contact from './Components/Contact/Contact'

// this is the first types of the routing the components 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path : "",
//         element: <Home />
//       },
//       {
//         path : "about",
//         element: <About />
//       },
//       {
//         path : "contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

// We can also do this types of routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home /> }/>
      <Route path='about' element={<About /> }/>
      <Route path='contact' element={<Contact /> }/>
      <Route path='user/:userid' element={<User /> }/>


      {/* API fetch karne ke liye yha se bhi kar sakta hai , yha par sirf route ko use kiya he  */}
      {/* <Route path='github' element={<Github /> }/> */}

      {/* yha par hum direct bhi api data fetch kar sakte he with the help of loader */}
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github /> }/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
