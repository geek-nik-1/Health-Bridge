import React from 'react'
import { createContext, useContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const value = {
    xyz : 123
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider