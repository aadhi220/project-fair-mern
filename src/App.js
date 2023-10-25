import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import DashBoard from './Pages/DashBoard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Projects from './Pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>

    <Routes>
     <Route path={'/'} element={<Home/>} />
     <Route path={'/dashboard'} element={<DashBoard/>} />
     <Route path={'/login'} element={<Login/>} />
     <Route path={'/register'} element={<Register/>} />
     <Route path={'/projects'} element={<Projects/>} />





    </Routes>
    <Footer/>
      
    </>
  );
}

export default App;
