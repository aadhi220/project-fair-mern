import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAPI, registerAPI } from "../services/allAPI";
// import Header from './Header'
export default function Auth({ register }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password } = userData;

    if (!username || !email || !password) {
      toast.info("Please fill the details");
    } else {
      const result = await registerAPI(userData);

      if (result.status === 200) {
        toast.success(`${result.data.username} has successfully registered`);

        setUserData({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        toast.warning(result.response.data);
        console.log(result);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login");
    const { email, password } = userData;
    if (!email || !password) {

      toast.info("Please fill the details");
      
    }
    const result =await loginAPI(userData)
    if(result.status===200){
      
      sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token",result.data.token)
      setUserData({
        email:'',password:''
      })
      navigate('/')
    }else {
      toast.warning(result.response.data)
      console.log(result);
    }
  };

  return (
    <>
      {/* <Header/> */}

      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="w-75 container">
          <Link to={"/"}>
            <i className="fa-solid fa-arrow-left"></i> Back to Home{" "}
          </Link>
          <div className="card shadow p-5 bg-success">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  src="https://ncetir.com/Images/login@4x.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center flex-column">
                  <h1 className="fw-bolder text-light mt-2">
                    <i className="fa-brands fa-stack-overflow fa-bounce"></i>{" "}
                    Project Fair
                  </h1>
                  <h5 className="fw-bolder mt-4 pb-3 text-light">
                    {register
                      ? "Sign up to your Account"
                      : "Sign in to your Account"}
                  </h5>

                  <Form className="text-light w-100">
                    {register && (
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="text"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              username: e.target.value,
                            })
                          }
                          value={userData.username}
                          placeholder="username"
                        />
                      </Form.Group>
                    )}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                        value={userData.email}
                        placeholder="Enter your Email ID"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="paswword"
                        onChange={(e) =>
                          setUserData({ ...userData, password: e.target.value })
                        }
                        value={userData.password}
                        placeholder="password"
                      />

                      {register ? (
                        <div className="mt-3">
                          <button
                            className="btn btn-light mb-2"
                            onClick={handleRegister}
                          >
                            Sign up
                          </button>
                          <p>
                            Already have Account? click here{" "}
                            <Link to={"/login"} className="text-black">
                              Login
                            </Link>
                          </p>
                        </div>
                      ) : (
                        <div className="mt-3">
                          <button
                            className="btn btn-light mb-2"
                            onClick={handleLogin}
                          >
                            Login
                          </button>
                          <p>
                            Dont have an Account? click here{" "}
                            <Link className="text-black" to={"/register"}>
                              Register
                            </Link>
                          </p>
                        </div>
                      )}
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
