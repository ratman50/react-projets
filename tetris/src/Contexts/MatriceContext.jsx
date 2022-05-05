import { createContext } from "react";

import React from 'react'

// const buildBoard=

export const  MatriceContext=createContext({}) ;
const MatriceProvider = ({children}) => {
    const [rows, columns]=[4, 4];
  return (
    <MatriceContext.Provider value={{rows, columns}}>
        {children}
    </MatriceContext.Provider>
  )
}

export default MatriceProvider