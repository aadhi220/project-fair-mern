import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { useContext } from "react";
// import { tokenAuthorisationContext } from "./contextApi/TokenAuth";

function App() {
  // const {isAuthorised}=useContext(tokenAuthorisationContext)
  const register = true;
  // console.log(isAuthorised);
  const token=sessionStorage.getItem('token');
  console.log(token);
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={
        token?
        <DashBoard /> :
        <Home/> }
        
        />
        <Route path={"/login"} element={<Auth  />} />
        <Route path={"/register"} element={<Auth register={ register} />} />
        <Route path={"/projects"} element={token? <Projects /> : <Home/>} />
      </Routes>
      <Footer />
      <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    </>
  );
}

export default App;
