import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
export default function MyProfile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{ height: "fit-content" }}
        className=" w-75 p-2 shadow mt-3 mb-5  rounded "
      >
        <div className=" d-flex  justify-content-between px-2">
          <h4>My Profile</h4>{" "}
          <button
            className="btn btn-outline-info"
            aria-expanded={open}
            aria-controls="example-collapse-text"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <label
              htmlFor="img"
              className="img w-100 d-flex justify-content-center mt-3"
            >
              <img
                className="img-fluid"
                style={{ width: "200px" }}
                src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
                alt=""
              />
              <input id="img" type="file" style={{ display: "none" }} />
            </label>
            <div className="d-flex flex-column mt-3 gap-2">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="GitHub"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Linkdin"
                />
              </div>
              <div className="mb-3 d-grid"><button className="btn btn-warning">Update</button> </div>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
}
