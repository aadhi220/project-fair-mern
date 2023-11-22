import React, { createContext, useContext, useState } from "react";
export const addProjectResponseContext = createContext();

function ContextShare({ children }) {
  const [addProjectResponse, setAddProjectResponse] = useState(true);
  return(
  <>
    <addProjectResponseContext.Provider
      value={{ addProjectResponse, setAddProjectResponse }}
    >
      {children}
    </addProjectResponseContext.Provider>
  </> )
}
export const useGlobalContext=()=>{
return (useContext(addProjectResponseContext))
}
export default ContextShare;
