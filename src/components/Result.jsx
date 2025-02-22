export default function Result({item,redirectToDetail}) {
    return (
      <>
          <div className="mone">
              <div className="move">
              <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}`} alt="" onClick={()=>redirectToDetail(item)} className='item' />
          </div>
          </div>
          </>
    )
  }

