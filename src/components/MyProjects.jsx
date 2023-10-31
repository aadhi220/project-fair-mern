import React from "react";
import { Table } from "react-bootstrap";
import AddProject from "./AddProject";
export default function MyProjects() {
  return (
    <>
      <div className="container-fluid shadow rounded p-3 mt-3">
        <div className="d-flex">
          <h3>My Projects</h3>{" "}
          <div className="ms-auto ">
            {" "}
            <AddProject />
          </div>
        </div>

        <div className="mt-4">
          <div className="border d-flex align-items-center rounded p-2">
            <h5>Project Title</h5>
            <div className="icon ms-auto">
              <button className="btn">
                <i className="fa-solid fa-pen-to-square fa-2xl"></i>
              </button>{" "}
              <button className="btn">
                <i className="fa-brands fa-github fa-2xl"></i>
              </button>{" "}
              <button className="btn">
                <i className="fa-solid fa-trash fa-2xl"></i>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
