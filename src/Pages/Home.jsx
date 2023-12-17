import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import titleImg2 from "../Assets/web-developer-illustration-1024x745-u15ekn1r.png";
import ProjectCard from "../components/ProjectCard";
import { homeProjectAPI } from "../services/allAPI";
function Home() {
  // const [isUserLogin, setIsUserLogin] = useState(false);
  // useEffect(() => {
  //   if (sessionStorage.getItem("token")) {
  //     setIsUserLogin(true);
  //   } else {
  //     setIsUserLogin(false);
  //   }
  // }, []);
  const isUserLogin=sessionStorage.getItem('token');
  const [homeProjects, setHomeProjects] = useState([]);
  //api call
  const getHomeProjects = async () => {
    const result = await homeProjectAPI();
    if (result.status === 200) {
      setHomeProjects(result.data);
    } else {
      console.log(result);
      console.log(Response.data);
    }
  };
  // console.log(homeProjects);
  useEffect(() => {
    getHomeProjects();
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#b8ffea",
          position: "relative",
        }}
        className="container-fluid rounded d-flex flex-column justify-content-center align-items-center "
      >
        <Row className="align-items-center text-uppercase  p-5">
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: "80px" }} className="fw-bolder ">
              Project ShowCase{" "}
            </h1>
            <p>
              A centralized hub for all your projects, where users can
              seamlessly add, manage, and access their projects, as well as
              explore our other dev projects on our website.
            </p>

            {isUserLogin ? (
              <Link to={"/dashboard"} className="btn btn-warning">
                Manage your Projects
                <i className="fa-solid fa-right-long fa-beat ms-2"></i>
              </Link>
            ) : (
              <Link to={"/login"} className="btn btn-warning">
                Start to Explore
                <i className="fa-solid fa-right-long fa-beat ms-2"></i>
              </Link>
            )}
          </Col>
          <Col sm={12} md={6} className="justify-content-center d-flex">
            {" "}
            <img src={titleImg2} className="w-75" alt="" />
          </Col>
        </Row>

        {/* scroll */}
        <div
          className="w-100 text-center "
          style={{ position: "absolute", bottom: "2rem" }}
        >
          {" "}
          <div className="text-capitalize">scroll down to see projects </div>
          <i class="fa-solid fa-chevron-down fa-bounce fa-lg"></i>
        </div>
      </div>

      {/* all projects */}

      <div className="all-projects mt-5">
        <h1 className="text-center">Explore Our Projects</h1>
        <marquee scrollAmount={25}>
          <div className="d-flex gap-5 mt-5">
            {homeProjects?.length > 0
              ? homeProjects.map((project, index) => {
                  return (
                    <div key={index} style={{ width: "500px" }} className="">
                      <ProjectCard projectDetails={project} />
                    </div>
                  );
                })
              : "empty "}
          </div>
        </marquee>
        <div className="text-center mt-5">
        {isUserLogin ?  <Link className="btn btn-outline-primary mb-5" to={"/projects"}>
            View More Projects
          </Link>  :<Link className="btn btn-outline-primary mb-5" to={"/login"}>
            Login To View More Projects
          </Link> }
        </div>
      </div>
    </>
  );
}

export default Home;
