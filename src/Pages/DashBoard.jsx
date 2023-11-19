import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import MyProjects from "../components/MyProjects";
import MyProfile from "../components/MyProfile";


function DashBoard() {
const [userName,setUsername]=useState("")
  useEffect(() => {
    if(sessionStorage.getItem("existingUser")){
setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  }, []);
  return (
    <div style={{ minHeight: "20vh" }} className="overflow-hidden p-3">
      <Header />
      
      <Row className="" style={{ marginTop: "100px" }}>
      <h2 className="w-100">
            Welcome <span style={{ color: "red" }}>{userName}</span>
          </h2>
        <Col sm={12} md={8}>
          {/* My Project section */}
          
          <MyProjects />
        </Col>
        <Col sm={12} md={4} className="d-flex justify-content-center">
          {/* My profile Section */}
          <MyProfile />
        </Col>
      </Row>

    </div>
  );

}

export default DashBoard;
