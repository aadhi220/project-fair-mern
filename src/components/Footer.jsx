import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div
        style={{ height: "300px" }}
        className="d-flex bg-success  flex-column justify-content-center text-white align-items center"
      >
        <div className="footer-content d-flex justify-content-evenly w-100">



          <div className="website text-start w-25 d-flex flex-column justify-content-start">
         <Link to={'/'} className="text-white" style={{textDecoration:'none'}}> <h2 > <i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair</h2></Link>
            <p> Designed and built with all the love in the world by Adithyan
             with the help of our contributors.</p>
             <p>Code licensed MIT, docs CC BY 3.0.</p>
          </div>


          <div className="links d-flex flex-column text-start">
            
          <h4>Links </h4>
          <Link
            to={"/"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            Home
          </Link>
          <Link
            to={"/dashboard"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            Dashboard
          </Link>
          <Link
            to={"/login"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            Login
          </Link>
          <Link
            to={"/projects"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            Projects
          </Link>
          <Link
            to={"/register"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            Register
          </Link>
        
            
            </div>{" "}
          <div className="guide d-flex flex-column text-start">
          <h4>Guides</h4>
          <Link target="blank"
            to={"https://react.dev/"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            React
          </Link>
          <Link
            to={"https://react-bootstrap.netlify.app/"}
            className="" target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            React bootstrap
          </Link>
          <Link
            to={"https://reactrouter.com/en/main"}
            className="" target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Routing
          </Link>




          </div>
          <div className="contact d-flex flex-column text-start">
          <h4>Contact Us</h4>
          <div className="d-flex w-100 gap-2">
            <input
              type="text"
              className="form-control "
              placeholder="Enter your Mail "
              name=""
              id=""
            />{" "}
            <button className="btn btn-info w-50">Subscribe</button>
          </div>
          {/* <div className="d-flex justify-content-evenly mt-3">
            <Link
              to={"/"}
              className=""
              style={{ textDecoration: "none", color: "white" }}
            >
             <i class="fa-brands fa-linkedin fa-2xl"></i>
            </Link>
            <Link
              to={"/"}
              className=""
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </Link>
            <Link
              to={"/"}
              className=""
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa-brands fa-github fa-2xl"></i>
            </Link>
            <Link
              to={"/"}
              className=""
              style={{ textDecoration: "none", color: "white" }}
            > 
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </Link>
          </div> */}



            
          </div>
        </div>
      </div>
    </>
  );
}
