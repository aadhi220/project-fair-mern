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
              <i className="fa-brands fa-stack-overflow fa-bounce"></i> Project
              Fair
            </Navbar.Brand>
          </Link>
          {location.pathname === "/dashboard" && (
            <button className="btn btn-primary" onClick={handleLogOut}>
              LogOut{" "}
              <i
                className="fa-solid fa-right-from-bracket  "
                style={{ color: "" }}
              ></i>
            </button>
          )}
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;
