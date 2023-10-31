import React from "react";
import { Card, Modal } from "react-bootstrap";
import projectImage from "../Assets/Screenshot 2023-10-26 123115.png";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
export default function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {" "}
      <Card onClick={handleShow} className="shadow mb-5 btn">
        <Card.Img variant="top" src={projectImage} />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
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
                src={projectImage}
                alt="project Image"
              />
            </Col>
            <Col md={6}>
              <h2>Project Title</h2>
              <p>
                Project Overview: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non totam culpa id vitae iste beatae quam
                quaerat laborum aut rem et reiciendis alias, in libero unde
                doloribus esse cupiditate consectetur.
              </p>
              <p>
                Languages Used :
                <span className="fw-bolder">HTML,CSS,REACT</span>
              </p>
            </Col>
          </Row>
          <div className="mt-3">
            <a
              href="https://github.com/aadhi220/mywatchlist"
              target="_blank"
              className="btn me-3"
            >
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>

            <a
              href="https://mywatchlist-orcin.vercel.app"
              target="_blank"
              className="btn me-3"
            >
              <i className="fa-solid fa-link fa-2xl"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
