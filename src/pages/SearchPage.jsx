import { useContext } from "react"
import { DEtailMovieContext } from "../context/context"
import { useEffect, useState } from "react"
import { fetcMovie } from '../hook/fetchMovie'
import Resultbar from "../components/Resultbar"

export default function SearchPage({direct}) {

  
  const {setSaveResults, saveResults} = useContext(DEtailMovieContext)
  const url = `https://api.themoviedb.org/3/search/movie?api_key=f023f080b1ae02166e840dee447c0865&query=${saveResults}`
  console.log(saveResults)

  const [save, setSave] = useState([]);
  
      useEffect(() => {
          handleGetSave();
      }, []);
  
      const handleGetSave = () => {
          fetcMovie(url)
              .then(data => {
                  setSave(data);
                  console.log(data)
              })
              .catch(error => console.error("Error fetching movies:", error));
      };
  return (
    <div className="rel">
                <h2>Results</h2>
                <div className="cool">
                {
                    save.map((movie) => {
                        return (
                        <Resultbar movie={movie} key={movie.id || movie.title} direct={direct}/>
                        )
                    })
                }
                </div>
            </div>
  )
}