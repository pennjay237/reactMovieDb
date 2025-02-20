import { useNavigate,useParams } from "react-router";
import More from "../components/More";
import Other from "../components/Other";
import Footer from "../components/Footer";
import React, { useContext } from "react";
import { MovieContext } from "../context/context";

export default function Detail(){

    const { setClickMovie } = useContext(MovieContext);
    const { id } = useParams()

    const { clickMovie } = useContext(MovieContext)
    const navigate = useNavigate();

// const handleNavigation = (movie) => {
//     setClickMovie(movie);
//     navigate(`/detail/${movie.id}`);
// };
console.log(clickMovie.backdrop_path)
    return(
        <>
        <div className="hero" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${clickMovie.backdrop_path})`, height: '600px', backgroundPosition: 'center', backgroundSize: 'cover'}}>

        </div>
        <More />
        <Other />
        <Footer />
        </>
    )
}

