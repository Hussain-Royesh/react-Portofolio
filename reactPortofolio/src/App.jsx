import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './page/navbar'
import Notfound from './page/notfound'
import  Home from './page/Home'
import { UserProvider } from './UserContext'

function App() {


  return (
    <>
      
      <p className='text-yellow p-3 m-3 text-3xl fond-bold underline'>

      <Link to='/'>  Let's Create My Portofolio </Link>
       
      </p>
      <h5> <Link to='/navbar' > Home</Link>  </h5>


<Routes>
  <Route path='/' element ={<></>}> </Route>
  <Route path='/navbar' element={<Navbar/>}></Route>
  <Route path='*' element={<Notfound/>}></Route>
  <UserProvider>
  <Route path='/home' element={<Home/>}></Route>
  </UserProvider>

 </Routes>
   </>
  )
}

export default App
