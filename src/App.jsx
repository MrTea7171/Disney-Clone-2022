import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import Home from './components/Home'
import Login from './components/Login'
import PageLayout from './PageLayout'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route index element={<Login/>}></Route>
            <Route exact path='home' element={<Home/>}></Route>
            <Route exact path='detail/:id' element={<Detail/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App