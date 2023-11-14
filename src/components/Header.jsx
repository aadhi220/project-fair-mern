import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";


function ContainerOutsideExample() {
const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const handleLogOut =()=> {
    sessionStorage.clear()
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
                class="fa-solid fa-right-from-bracket  "
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
