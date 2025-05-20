import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Article from './pages/Article'
import Project from './pages/Project'

//import './App.css'

function App() {

  return (
    <>
      <Router>
         <NavBar>
            <main className='pt-4'>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='./project' element={ <Project/>}/>
                <Route path='./article' element={<Article/>}/>
                <Route path='/contact' element={<Contact/>} />
              </Routes>
            </main>
         </NavBar>
      </Router>
    </>
  )
}

export default App
