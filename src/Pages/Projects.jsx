import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { Row, Col } from "react-bootstrap";
import { getAllProjectAPI } from "../services/allAPI";
import { toast } from "react-toastify";
function Projects() {
  const [token, setToken] = useState("");
  const [allProjects, setAllProjects] = useState([]);
  const [isLoading,setIsLoading]= useState(true)
// console.log("page render");
  const getAllProjects = async () => {
    
    // console.log("fucntion call");
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
// console.log("token added");
      try {
        // console.log("api call start");
        const result = await getAllProjectAPI(reqHeader);
        // console.log("api call end");
        if (result.status === 200) {
          setAllProjects(result.data);
          // toast.success("success")
          setIsLoading(false)
          // console.log("result");
        } else {
          console.log(result);
          toast.error("error api call");
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    }
  };

  // console.log(allProjects);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
    getAllProjects();
  }, [token]);
// console.log(allProjects);
  return (
    <>
      <Header />
      <div style={{ marginTop: "100px" }} className="container">
        <h1 className="text-center mb-5">Projects</h1>
        <div className="d-flex w-100  justify-content-center align-items-center ">
          <form className="d-flex  overflow-hidden mb-5 border border-2 border-primary   rounded">
            <input
              type="text"
              style={{ width: "450px" }}
              className="form-control rounded-0"
              placeholder="search"
            />
            <button className="btn btn-primary  rounded-0">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
          </form>
        </div>
        <Row className=" mt-5container-fluid">
          {isLoading ? "loading" : allProjects.length > 0
            ? allProjects?.map((project, index) => (
                <Col key={index} sm={12} md={6} lg={4}>
                  <ProjectCard projectDetails={project} />
                </Col>
              ))
            : "empty"}
        </Row>
      </div>
    </>
  );
}

export default Projects;
