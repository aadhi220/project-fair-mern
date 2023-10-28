import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import DashBoard from './Pages/DashBoard';
import Projects from './Pages/Projects';
import Footer from './components/Footer';
import Auth from './components/Auth';
import { useState } from 'react';

function App() {
  const[register,setRegister]=useState(false)
  return (
    <>

    <Routes>
     <Route path={'/'} element={<Home/>} />
     <Route path={'/dashboard'} element={<DashBoard/>} />
     <Route path={'/login'} element={<Auth register={register} />} />
     <Route path={'/register'} element={<Auth register={register} />} />
     <Route path={'/projects'} element={<Projects/>} />
    </Routes>
    <Footer/>
      
    </>
  );
}

export default App;
