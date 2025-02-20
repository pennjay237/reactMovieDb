import { useNavigate,useParams } from "react-router";
import Header from "../components/Header";
import Trending from "../components/TrendingMovies";
import Search from "../components/Search";
import Action from "../components/Action";
import Romance from "../components/Romance";
import Comedy from "../components/Comedy";
import Footer from "../components/Footer";
import { useContext } from "react";
import { MovieContext } from "../context/context";

export default function Detail(){

    const { setClickMovie } = useContext(MovieContext);
    const { id } = useParams()

    const { clickMovie } = useContext(MovieContext)
    const navigate = useNavigate();

const handleNavigation = (movie) => {
    setClickMovie(movie);
    navigate(`/detail/${movie.id}`);
};
    return(
        <>
        <Header />
        <Trending />
        <Search />
        <Action />
        <Romance />
        <Comedy />
        <Footer />
        </>
    )
}