import React, { useContext, useEffect, useState } from "react";
import AddProject from "./AddProject";
import { DeleteUserProjectAPI, getUserProjectAPI } from "../services/allAPI";
import {
  addProjectResponseContext,
  editProjectResponseContext,
} from "../contextApi/ContextShare";
import EditProject from "./EditProject";
import LoadingSpinner from "./Spinner";
export default function MyProjects() {
  const { addProjectResponse } = useContext(addProjectResponseContext);
  const { editProjectResponse } = useContext(
    editProjectResponseContext
  );
  const [userProjects, setUserProjects] = useState([]);

  const getUserProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await getUserProjectAPI(reqHeader);
      if (result.status === 200) {
        setUserProjects(result.data);
      } else {
        console.log(("error", result));
      }
    }
  };
  const handleDeleteProject = async (projectId) => {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const result = await DeleteUserProjectAPI(projectId, reqHeader);
      console.log(" call", result);
      if (result.status === 200) {
        getUserProjects();
        console.log("success", result);
      } else {
        getUserProjects();
        console.log(("error", result));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUserProjects();
  }, [addProjectResponse,editProjectResponse]);
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

        <div className="mt-4 d-flex flex-column gap-3">
          {userProjects ? userProjects.length > 0 ? (
            userProjects.map((project, index) => (
              <div
                key={index}
                className="border d-flex align-items-center rounded p-2"
              >
                <h5>{project?.title}</h5>
                <div className="icon ms-auto">
                  <EditProject project={project} />
                  <a href={project?.github} target="_blank">
                    <button className="btn">
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </button>
                  </a>{" "}
                  <button
                    className="btn"
                    onClick={() => handleDeleteProject(project?._id)}
                  >
                    <i className="fa-solid fa-trash fa-2xl"></i>
                  </button>{" "}
                </div>
              </div>
            ))
          ) : (
           "Nothing added yet!"
          ) : <LoadingSpinner/>}
        </div>
      </div>
    </>
  );
}
