import React, { useEffect, useState } from "react";

import Collapse from "react-bootstrap/Collapse";
import { BASE_URL } from "../services/baseUrl";
import { editUserProfileAPI } from "../services/allAPI";
import { toast } from "react-toastify";

export default function MyProfile() {
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
    github: "",
    linkdin: "",
  });
  const [existingImage, setExistingImage] = useState("");
  const [preview, setPreview] = useState("");
  const [open, setOpen] = useState(false);

const handleProfileUpdate = async ()=>{
const {username,email,password,github,linkdin,profile}=userProfile;

const reqBody = new FormData();

reqBody.append("username",username);

reqBody.append("email",email);

reqBody.append("password",password);

reqBody.append("github",github);

reqBody.append("linkdin",linkdin);
preview ? reqBody.append("profile",profile) : reqBody.append("profile",existingImage)


const token =sessionStorage.getItem("token");
if(preview) {
  const reqHeader = {
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${token}`,
  };
  // console.log(reqHeader);
try {
  console.log('first');
  const result = await editUserProfileAPI(reqHeader,reqBody) 
  if (result.status === 200) {
    setOpen(false);
   toast.success("Profile updated successfully")
  }else {
    console.log("API Error Response:", result);
   
    toast.error("Error updating profile. Please try again.");
  }
} catch (error) {
  console.log(error);
  toast.error("Error updating profile. Please try again.");
}

}else {

  const reqHeader = {
    "Content-Type": "application/json",
   "Authorization": `Bearer ${token}`,
  };

  try {
console.log("second");
    const result = await editUserProfileAPI(reqHeader,reqBody) 
    
    if (result.status === 200) {
      setOpen(false);
     toast.success("Profile updated successfully")
    }else {
      console.log("API Error Response:", result);
     
      toast.error("Error updating profile. Please try again.");
    }
  } catch (error) {
    console.log(error);
    toast.error("Error updating profile. Please try again.");
  }
  
}


}



  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    if (user) {
      // console.log(user);
      setUserProfile({
        username: user.username,
        email: user.email,
        password: user.password,
        profile: "",
        github: user.github,
        linkdin: user.linkdin,
      });
      if (user.profile) {
        setExistingImage(`${BASE_URL}/uploads/${user.profile}`);
        console.log("dd",existingImage)
      } else {
        setExistingImage(
          "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
        );
      }
    }
  }, []);
  // console.log(userProfile);
  useEffect(() => {
    if (userProfile.profile) {
      setPreview(URL.createObjectURL(userProfile.profile));
    }
  }, [userProfile.profile]);
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
                src={preview? preview :existingImage}
                alt=""
              />
              <input id="img" onChange={(e)=>setUserProfile({...userProfile,profile: e.target.files[0]})}  type="file" style={{ display: "none" }} />
            </label>
            <div className="d-flex flex-column mt-3 gap-2">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="GitHub"
                  value={userProfile.github || ""}
                  onChange={(e) =>
                    setUserProfile({...userProfile, github: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Linkdin"
                  value={userProfile.linkdin || ""}
                  onChange={(e) =>
                    setUserProfile({...userProfile, linkdin: e.target.value })
                  }
                />
              </div>
              <div className="mb-3 d-grid">
                <button className="btn btn-warning" onClick={()=> {
                  handleProfileUpdate()
                }}>Update</button>{" "}
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
}
