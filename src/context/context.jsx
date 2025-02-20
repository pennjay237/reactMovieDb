import { createContext, useState } from "react";
import PropType from "prop-types";


export const MovieContext= createContext();

export const MovieContextData=({children})=>{
    const [clickMovie, setClickMovie] = useState(null);
    return(
        <MovieContext.Provider value= {{clickMovie, setClickMovie}}>
            {children}
        </MovieContext.Provider>
    );
};
MovieContextData.propTypes = {
    children: PropType.node,
};

export default MovieContextData