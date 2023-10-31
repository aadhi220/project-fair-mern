import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Add Project
      </Button>

      <Modal show={show} centered size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center   ">
              <img
                className="img-fluid w-75  "
                src="https://lirp.cdn-website.com/343f0986cb9d4bc5bc00d8a4a79b4156/dms3rep/multi/opt/1274512-placeholder-640w.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-3">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Project title"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Language Used"
              />{" "}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Github link"
              />{" "}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="website Link"
              />
            </div>
            <input type="text" className="form-control w-100" placeholder="Project Overview"  />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;
