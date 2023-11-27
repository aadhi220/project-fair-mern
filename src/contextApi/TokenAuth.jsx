import React, { createContext, useState } from 'react'
export const tokenAuthorisationContext =createContext()
function TokenAuth({children}) {
const [isAuthorised,setIsAuthorised] = useState(false)
  return (
    <>
    <tokenAuthorisationContext.Provider value={{isAuthorised,setIsAuthorised}}>
      
      {children}
      
    </tokenAuthorisationContext.Provider>
    </>
  )
}

export default TokenAuth