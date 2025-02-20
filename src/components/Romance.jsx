import  { useState, useEffect } from 'react';


function Romance ({redirectToDetail}){
  const [movies, setMovies] = useState([]);

useEffect(() => {
  const fetchMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=46c35111faa147ad5c3b9f8442f13655')
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results)
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  fetchMovies();
}, []);


return ( 
  <>
  <h1 className='hh'>Romance & Drama</h1>
  <div className='mone'>
  
    {
    movies.map((item,index)=>{
      return (
        <>
         
        <div className="move" key={index}>

        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}`} alt="" onClick={()=>redirectToDetail(item)} className='item' />
       
        </div>

        </>

      )

    })

  }
  </div>
  </>
 

  )

}
export default Romance

  