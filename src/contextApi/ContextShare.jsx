import React, { createContext,useState } from "react";
export const addProjectResponseContext = createContext();
export const editProjectResponseContext =createContext();
function ContextShare({ children }) {
  const [addProjectResponse, setAddProjectResponse] = useState(true);
  const [editProjectResponse,setEditProjectResponse]=useState(true)
  return(
  <>
    <addProjectResponseContext.Provider
        value={{ addProjectResponse, setAddProjectResponse }}
      >
        <editProjectResponseContext.Provider
          value={{ editProjectResponse, setEditProjectResponse }}
        >
          {children}
        </editProjectResponseContext.Provider>
      </addProjectResponseContext.Provider>
  </> )
}
// export const useGlobalContext=()=>{
// return (useContext(addProjectResponseContext))
// }
export default ContextShare;


