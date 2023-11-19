import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { AddProjectApi } from "../services/allAPI";

function AddProject() {
  const [show, setShow] = useState(false);
const [token,setToken]=useState("")
  const handleClose = () => {
    setShow(false)
    setProjectDetails({
      title:"",
      languages:"",
      overview:"",
      github:"",
      website:"",
      thumbnail:"",
    })
    setPreview("")
  };
  const handleShow = () => setShow(true);
  const [projectDetails,setProjectDetails]=useState({
    title:"",
    languages:"",
    overview:"",
    github:"",
    website:"",
    thumbnail:"",
  })
  const [preview,setPreview]=useState("")

  const handleAddProject= async (e)=>{
    e.preventDefault()
    console.log("working");
    const {title,languages,overview,github,website,thumbnail}=projectDetails
    if(!title || !languages || !overview || !github || !website || !thumbnail ) {
      toast.warning("please fill ")
  
    }else {
     const reqBody =new FormData()
     reqBody.append("title",title)
     reqBody.append("languages",languages)
     reqBody.append("overview",overview)
     reqBody.append("github",github)
     reqBody.append("website",website)
     reqBody.append("thumbnail",thumbnail)

if(token){
  const reqHeader ={
    "Content-Type":"multipart/form-data",
    "Authorization":`Bearer ${token}`
   }
   const result =await AddProjectApi(reqBody,reqHeader)
   if(result.status===200){
    console.log(result.data);
   }else {
    console.log(result);
    console.log(result.responce.data);
   }
}
   
    }
 
  }
useEffect(()=> {
if(projectDetails.thumbnail){
  setPreview(URL.createObjectURL(projectDetails.thumbnail))
}
},[projectDetails.thumbnail])

useEffect(()=>{
if(sessionStorage.getItem("token")){
  setToken(sessionStorage.getItem("token"))
}else {
  setToken("")
}
},[])
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
          <div  className="row">
            <div className="col-lg-6 d-flex justify-content-center   ">
          <label htmlFor="thumbnail">
                <img
                  className="img-fluid w-75  "
                  src={preview? preview :"https://lirp.cdn-website.com/343f0986cb9d4bc5bc00d8a4a79b4156/dms3rep/multi/opt/1274512-placeholder-640w.png"}
                  alt=""
                />
          </label>
              <input type="file" id="thumbnail" style={{display:"none"}}  onChange={(e)=>setProjectDetails({...projectDetails,thumbnail: e.target.files[0]})} />
            </div>
            <div className="col-lg-6 pt-3">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Project title"
                value={projectDetails.title || ""}
                onChange={(e)=>setProjectDetails({...projectDetails,title: e.target.value})}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Language Used"
                value={projectDetails.languages || ""}
                onChange={(e)=>setProjectDetails({...projectDetails,languages: e.target.value})}
              />{" "}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Github link"
                value={projectDetails.github|| ""}
                onChange={(e)=>setProjectDetails({...projectDetails,github: e.target.value})}
              />{" "}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="website Link"
                value={projectDetails.website || ""}
                onChange={(e)=>setProjectDetails({...projectDetails,website: e.target.value})}
              />
            </div>
            <input type="text" className="form-control w-100" placeholder="Project Overview"  value={projectDetails.overview || ""}
                onChange={(e)=>setProjectDetails({...projectDetails,overview: e.target.value})}  />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary"  onClick={(e)=>handleAddProject(e)}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;
