import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Career from './pages/Career/Career'
import News from './pages/News/News'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/news'} element={<News/>}/>
        <Route path={'/career'} element={<Career/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App