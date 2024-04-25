import { BrowserRouter, Routes, Route }from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import './App.css'
import './index.css'
import {Login} from './pages/login/login'
import {Signup} from './pages/signup/signup'
import Home from './pages/home/home'
function App() {
 

  return (
    <div className='p-4 flex h-screen items-center justify-center'>
<BrowserRouter>
       
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
        </BrowserRouter>
        <Toaster/>
    </div>
  )
}

export default App
