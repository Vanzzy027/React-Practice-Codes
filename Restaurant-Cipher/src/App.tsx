
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Meals from './pages/Meals'
import Register from './pages/Register'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/meals',
      element: <Meals />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
  ])

  return (
    <RouterProvider router={router} />)
}

export default App
