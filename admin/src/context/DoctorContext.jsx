import React from 'react'
import { createContext, useContext, useState } from 'react'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
  
  const value = {
    
  }
  
  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  )
}

export default DoctorContextProvider