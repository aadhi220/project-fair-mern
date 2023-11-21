import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import titleImg from '../Assets/web-development-3454628-2918517.webp'
import titleImg2 from '../Assets/web-developer-illustration-1024x745-u15ekn1r.png'
import ProjectCard from '../components/ProjectCard'
import { homeProjectAPI } from '../services/allAPI'
function Home() {
  const [isUserLogin,setIsUserLogin]=useState(false)
  useEffect(()=> {
    if(sessionStorage.getItem("token")){
setIsUserLogin(true)
    }else {
      setIsUserLogin(false)
    }
  },[])


const[homeProjects,setHomeProjects]=useState([])
//api call
const getHomeProjects =async ()=> {
  const result = await homeProjectAPI()
  if(result.status===200) {
    setHomeProjects(result.data)
  }else {
    console.log(result);
    console.log(Response.data);
  }
}
// console.log(homeProjects);
useEffect(()=> {
    getHomeProjects()
    
  },[])
  return (
    <>
    <div style={{width:'100%',height:'100vh',backgroundColor:'whitesmoke'}} className='container-fluid rounded d-flex justify-content-center align-items-center'>
<Row className="align-items-center  p-5">

  <Col sm={12} md={6}>
  <h1 style={{fontSize:'80px'}} className='fw-bolder ' ><i className='fa-brands fa-stack-overflow fa-bounce'></i>Project Fair </h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, autem, eum velit veniam quia illum quaerat voluptates temporibus tempore at nemo asperiores quod tempora ab alias dignissimos totam cupiditate ipsam.</p>
  
  {isUserLogin ? <Link to={'/dashboard'} className='btn btn-warning'>Manage your Projects<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>:<Link to={'/login'} className='btn btn-warning'>Start to Explore<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>}
  </Col>
<Col sm={12} md={6} className='justify-content-center d-flex'> <img  src={titleImg2} className='w-75' alt="" /></Col>
 
</Row>




    </div>
    
    
    {/* all projects */}
    
<div className="all-projects mt-5">
<h1 className="text-center">Explore Our Projects</h1>
<marquee scrollAmount={25} >
  <div className='d-flex gap-5 mt-5'> 


    { homeProjects?.length>0 ? homeProjects.map((project,index)=>{

   return ( <div key={index} style={{width:'500px'}} className=''> 
  
      <ProjectCard projectDetails={project}/>
  
    
    </div>)
  }) : "empty "
  
  }


  
  </div>
</marquee>
<div className='text-center mt-5'>

  <Link to={"/projects"}>View More Projects</Link>


</div>


</div>
    </>
  )
}

export default Home