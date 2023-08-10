import React from 'react'
import {Routes,Route} from "react-router-dom"
import SignIn from './components/SignIn/SignIn/SignIn'
import Home from './components/SignUp/Home/Home'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default App