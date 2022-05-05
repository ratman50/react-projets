import React, { createContext,useState } from 'react'



const PlayerContext= createContext({});
export {PlayerContext};
const PlayerProvider = ({children}) => {
      const [options, setOptions] = useState({
        choice_blue:false,
        choice_yellow:false,
        choice_green:false,
        choice_red:false,
    });
   
    const handleCheck=(val)=>{
        const copy={...options};
        copy[val]=!copy[val];
        setOptions(copy)
        console.log(options);
    }
  const value={options,handleCheck};
  return (
    <PlayerContext.Provider value={value} >{children}</PlayerContext.Provider>
  )
}
export default PlayerProvider;
