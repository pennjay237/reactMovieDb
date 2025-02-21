import { useNavigate,useParams } from "react-router";
import More from "../components/More";
import Other from "../components/Other";
import Footer from "../components/Footer";
import { useContext } from "react";
import { MovieContext } from "../context/context";
import Navbar from "../components/Navbar";
import Topcast from "../components/Topcast";

export default function Detail(){

    const { setClickMovie } = useContext(MovieContext);
    const { id } = useParams()

    const { clickMovie } = useContext(MovieContext)
    const navigate = useNavigate();

  return(
        <>
        <Navbar/>
        <div className="hero" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${clickMovie.backdrop_path})`, height: '600px', backgroundPosition: 'center', backgroundSize: 'cover'}}>

        </div>
        <Topcast/>
        <More />
        <Other />
        <Footer />
        </>
    )
}

