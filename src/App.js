import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [register, setRegister] = useState(true);
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={<DashBoard />} />
        <Route path={"/login"} element={<Auth  />} />
        <Route path={"/register"} element={<Auth register={register} />} />
        <Route path={"/projects"} element={<Projects />} />
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
