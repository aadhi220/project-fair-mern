import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { Row, Col } from "react-bootstrap";
import { getAllProjectAPI } from "../services/allAPI";
import LoadingSpinner from "../components/Spinner";
function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [isLoading,setIsLoading]= useState(true)
  const [searchKey,setSearchKey]=useState("")
const getallProjects = async ()=>{
  if(sessionStorage.getItem("token")){
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"application/json", "Authorization":`Bearer ${token}`
    }
    const result = await getAllProjectAPI(searchKey,reqHeader)
    if(result.status===200){
      setAllProjects(result.data)
      setIsLoading(false)
    }else{
      console.log(result);
      setIsLoading(false)
    }
  }
}
const handleSearch=(e)=> {
  e.preventDefault()

}

useEffect(()=>{
  getallProjects()
},[searchKey])
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
              value={searchKey || ""}
              onChange={(e)=>setSearchKey(e.target.value)}
            />
            <button className="btn btn-primary  rounded-0" onClick={(e)=>handleSearch(e)}>
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
          </form>
        </div>
        <Row className=" mt-5container-fluid">
          {isLoading ? <LoadingSpinner/> : allProjects.length > 0
            ? allProjects?.map((project, index) => (
                <Col key={index} sm={12} md={6} lg={4}>
                  <ProjectCard projectDetails={project} setSearchKey={setSearchKey} />
                </Col>
              ))
            : "empty"}
        </Row>
      </div>
    </>
  );
}

export default Projects;
