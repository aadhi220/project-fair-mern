import React from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { Row, Col } from "react-bootstrap";
function Projects() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "100px" }} className="container">
        <h1 className="text-center mb-5">Projects</h1>
        <div className="d-flex w-100  justify-content-center align-items-center ">
          <form  className="d-flex  overflow-hidden mb-5 border border-2 border-primary   rounded">
            <input
              type="text"
              style={{ width: "450px" }}
              className="form-control rounded-0"
              placeholder="search"
            />
            <button className="btn btn-primary  rounded-0">
              <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
          </form>
        </div>
        <Row className=" mt-5container-fluid">
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Projects;
