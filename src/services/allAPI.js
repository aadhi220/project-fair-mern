// register

import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"

//register
export const registerAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,user,"")
}

//login 

export const loginAPI =async (user)=> {
    return await commonApi("POST",`${BASE_URL}/user/login`,user,"")
}

//add Project 

export const AddProjectApi =async(reqBody,reqHeader)=>{
    return await commonApi("POST",`${BASE_URL}/projects/add`,reqBody,reqHeader)
}

// homeproject

export const homeProjectAPI = async ()=> {
    return await commonApi("GET",`${BASE_URL}/projects/home-projects`,"","")
}
// allProjects
export const getAllProjectAPI = async (searchKey,reqHeader)=> {
    return await commonApi("GET",`${BASE_URL}/projects/all?search=${searchKey}`,"",reqHeader)
}

//userprojects

export const getUserProjectAPI = async (reqHeader)=> {
    return await commonApi("GET",`${BASE_URL}/user/all-projects`,"",reqHeader)
}

//edit user project

export const EditUserProjectAPI =async (projectId,reqHeader,reqBody)=>{
    return await commonApi("PUT",`${BASE_URL}/projects/edit/${projectId}`,reqBody,reqHeader)
}