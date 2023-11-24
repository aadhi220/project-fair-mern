import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import {editProjectResponseContext } from "../contextApi/ContextShare";
import { BASE_URL } from "../services/baseUrl";
import { EditUserProjectAPI } from "../services/allAPI";

function EditProject({project}) {
  const {editProjectResponse,setEditProjectResponse}=useContext(editProjectResponseContext)
  const [show, setShow] = useState(false);

  
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      id:project._id,
      title: project.title,
      languages: project.languages,
      overview: project.overview,
      github: project.github,
      website: project.website,
      thumbnail:"",
    });
    setPreview("");
  };
  const [projectDetails, setProjectDetails] = useState({
    id:project._id,
    title: project.title,
    languages: project.languages,
    overview: project.overview,
    github: project.github,
    website: project.website,
    thumbnail:"",
  });
  const [preview, setPreview] = useState("");

  const handleEditProject = async (e) => {
    e.preventDefault();
  console.log("edit strat");
    const {id, title, languages, overview, github, website, thumbnail } = projectDetails;
  
    if (!title || !languages || !overview || !github || !website ) {
      toast.warning("Please fill in all fields.");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("github", github);
      reqBody.append("website", website);
     preview ?  reqBody.append("thumbnail", thumbnail): reqBody.append("thumbnail", project.thumbnail);
  
      // console.log("Request Body Entries:", Array.from(reqBody.entries()));
  
  const token =sessionStorage.getItem("token")
    if(preview){
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      };
     
    //api call 
const result =await EditUserProjectAPI(id,reqHeader,reqBody)
console.log("call start");
if( result.status===200) {
  handleClose()
  
  //pass response to my project
  setEditProjectResponse(!editProjectResponse)
}
    }else {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };
      const result =await EditUserProjectAPI(id,reqHeader,reqBody)
      console.log("call start");
      console.log(result);
      
    }


  
      
     
    }
  };
  
  useEffect(() => {
    if (projectDetails.thumbnail) {
      setPreview(URL.createObjectURL(projectDetails.thumbnail));
    }
  }, [projectDetails.thumbnail]);

  return (
    <>
      <button className="bg-transparent border-0" onClick={handleShow}>
      <i className="fa-solid fa-pen-to-square fa-2xl"></i>
      </button>

      <Modal show={show} centered size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row">
            <div className="col-lg-6 d-flex justify-content-center   ">
              <label htmlFor="thumbnail">
                <img
                  className="img-fluid w-75  "
                  src={
                    preview
                      ? preview
                      :`${BASE_URL}/uploads/${project.thumbnail}` 
                  }
                  alt=""
                />
              </label>
              <input
                type="file"
                id="thumbnail"
                style={{ display: "none" }}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    thumbnail: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="col-lg-6 pt-3">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Project title"
                value={projectDetails.title || ""}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    title: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Language Used"
                value={projectDetails.languages || ""}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    languages: e.target.value,
                  })
                }
              />{" "}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Github link"
                value={projectDetails.github || ""}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    github: e.target.value,
                  })
                }
              />{" "}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="website Link"
                value={projectDetails.website || ""}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    website: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="text"
              className="form-control w-100"
              placeholder="Project Overview"
              value={projectDetails.overview || ""}
              onChange={(e) =>
                setProjectDetails({
                  ...projectDetails,
                  overview: e.target.value,
                })
              }
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={(e) => handleEditProject(e)}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProject;
