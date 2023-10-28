import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Header from './Header'
export default function Auth({ register }) {
  const isRegisterForm = register ? true : false;

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
                    {!isRegisterForm
                      ? "Sign up to your Account"
                      : "Sign in to your Account"}
                  </h5>

                  <Form className="text-light w-100">
                    {isRegisterForm && (
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="username" />
                      </Form.Group>
                    )}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter your Email ID" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="paswword" placeholder="password" />

                    {
                        isRegisterForm ? 
                        <div className="mt-3">
                            <button className="btn btn-light mb-2">Register</button>
                            <p>Already have Account? click here <Link to={'/login'}>Login</Link></p>
                        </div>  
                        : 
                        <div className="mt-3">
                        <button className="btn btn-light mb-2">Login</button>
                            <p>Dont have an Account? click here <Link className="text-black" to={'/register'}>Register</Link></p>
                        </div>
                        
                    }
                  
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
