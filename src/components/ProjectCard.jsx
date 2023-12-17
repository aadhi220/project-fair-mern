import React from "react";
import { Card, Modal } from "react-bootstrap";
import projectImage from "../Assets/Screenshot 2023-10-26 123115.png";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BASE_URL } from "../services/baseUrl";
import Dropdown from 'react-bootstrap/Dropdown';

export default function ProjectCard({projectDetails,setSearchKey}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(projectDetails);
  return (
    <>
      {" "}
{ projectDetails &&   <>
        <Card onClick={handleShow} className="shadow mb-5 btn">
          <Card.Img variant="top" src={projectDetails?.thumbnail? `${BASE_URL}/uploads/${projectDetails.thumbnail}` : projectImage} />
          <Card.Body>
            <Card.Title>{projectDetails?.title}</Card.Title>
          </Card.Body>
        </Card>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <img
                  style={{ height: "200px" }}
                  className="img-fluid"
                  src={projectDetails?.thumbnail? `${BASE_URL}/uploads/${projectDetails.thumbnail}` : projectImage}
                  alt="project Image"
                />
              </Col>
              <Col md={6}>
                <h2>{projectDetails?.title}</h2>
                <p>
                {projectDetails?.overview}
                </p>
                <p>
                  Languages Used :
                  <span className="fw-bolder">{projectDetails?.languages}</span>
                </p>
               
              </Col>
            </Row>
            <div className="mt-3 row">

            <div className="col">
              
           
<Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      <img src={projectDetails?.profilePic ?`${BASE_URL}/uploads/${projectDetails?.profilePic}` : "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"} className="rounded-circle " style={{width: "40px", height:'40px', objectFit:'cover' }}
alt="Avatar" /> 
<span className="fw-bold ms-2 text-capitalize">By {projectDetails?.username}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={projectDetails?.userGit} target="_blank">Github</Dropdown.Item>
        <Dropdown.Item href={projectDetails?.userLinkdin} target="_blank">Linkdin</Dropdown.Item>
        <Dropdown.Item onClick={()=>setSearchKey(projectDetails?.username)}>More Projects</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </div>

        
     <div className="col">
                <a
                  href={projectDetails?.github}
                  target="_blank"
                  className="btn me-3"
                >
                  <i className="fa-brands fa-github fa-2xl"></i>
                </a>
    
                <a
                  href={projectDetails?.website}
                  target="_blank"
                  className="btn me-3"
                >
                  <i className="fa-solid fa-link fa-2xl"></i>
                </a>
     </div>

           


               
            </div>
          </Modal.Body>
       </Modal>
    </>}
    </>
  );
}
