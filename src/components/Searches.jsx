import { useNavigate } from "react-router";
import { MovieContext } from "../context/context";
import { useContext, useState } from "react";


export default function Searches (){ 
const [searchedMovie, setSearchedMovie] = useState([]);
const [query, setQuery] = useState("");
const navigate = useNavigate;
const ApiKey= import.meta.env.VITE_API_KEY;

const {setClickMovie} = useContext(MovieContext);

const handleQuery = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.length > 1) {
        const response = await fetch(
          `
           https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${searchTerm}`
        );
        const data = await response.json();
        setSearchedMovie(data.results || []);
      } else {
        setSearchedMovie([]);
      }
    };

    const handleMovieDetail = (item) => {
        console.log(item);
        setClickMovie(item);
        navigate(`/details/${item.id}`);
      };
    

{
    return (
        <>
        <div className={styles.input}>
      <input
        type="search"
        placeholder="Search movies"
        value={query}
        onChange={handleQuery}
      />

      {searchedMovie.length > 0 && (
        <div className={styles.searchResults}>
          {searchedMovie.map((item) => (
            <div key={item.id} className={styles.searchItem}>
              <img
                src={`${IMAGE_PATH}${item.poster_path}`}
                alt={item.title}
                onClick={() => handleMovieDetail(item)}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
        </>
    )
}
}