
export default function Searches ({movie, direct}) {
    return (
        <>
        <div className="and">
            <div className="films">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="card" onClick={() => direct(movie)}/>
        </div>
        </div>
        </>
    )
}