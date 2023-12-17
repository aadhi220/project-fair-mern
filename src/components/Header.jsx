// import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { tokenAuthorisationContext } from "../contextApi/TokenAuth";


function ContainerOutsideExample() {
  // const {setIsAuthorised}=useContext(tokenAuthorisationContext)
const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);

  const handleLogOut =()=> {

    sessionStorage.clear()
    // setIsAuthorised(false);
    navigate('/')
    
  }
  return (
    <Container>
      <Navbar fixed="top" className="bg-success">
        <Container>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            {" "}
            <Navbar.Brand style={{ fontSize: "1.5rem" }} className="text-white">
            PROJECT SHOWCASE
            </Navbar.Brand>
          </Link>
         <div>
          
            {location.pathname === "/dashboard" ? (
               <Link to={'/projects'} className="btn btn-info me-5">All Projects</Link>
            ):   <Link to={'/dashboard'} className="btn btn-info me-5">Dashboard</Link> }

<button className="btn btn-primary" onClick={handleLogOut}>
                LogOut{" "}
                <i
                  className="fa-solid fa-right-from-bracket  "
                  style={{ color: "" }}
                ></i>
              </button>
         </div>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;
