import Header from "../components/Header";
import  {useContext} from 'react';
import Search from "../components/Search";
import Action from "../components/Action";
import Romance from "../components/Romance";
import Comedy from "../components/Comedy";
import Footer from "../components/Footer";
import Trending from "../components/TrendingMovies";
import { MovieContext } from "../context/context";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";



export default function Home(){
    const { setClickMovie } = useContext(MovieContext);
    const navigate = useNavigate();

const handleNavigation = (movie) => {
    setClickMovie(movie);
    navigate(`/detail/${movie.id}`);
};
    return(
        <>
        <Header />
        <Trending />
        
        <Search redirectToDetail={handleNavigation} />
        <Action redirectToDetail={handleNavigation} />
        <Romance redirectToDetail={handleNavigation} />
        <Comedy redirectToDetail={handleNavigation} />
        <Footer redirectToDetail={handleNavigation} />
        </>
       
    )
};