import "../css/MovieCard.css";
import { useMovieContext } from "../context/movieContext";
import { useState } from "react";
import MovieTrailer from "./MovieTrailer";
export default function MovieCard({ movie }) {
  const { isFav, addfav, remfav } = useMovieContext();
  const favorites = isFav(movie.id);
  const [istrail,setTrail] =useState(false)
  function onfav(e) {
    e.preventDefault();
    if (favorites) remfav(movie.id);
    else addfav(movie);
  }
  function trailer(){
    if(istrail===true){
      setTrail(false)
    }
    else{
      setTrail(true)
    }
    
  }

    
  return (
  
    <div className="movie-card"  >
     
      <a onClick={()=>{
        const youtubeUrl=`https://www.youtube.com/results?search_query=${movie.title}+trailer`
        window.open(youtubeUrl,"_blank")
      }}>{istrail?<MovieTrailer />:""}</a>
      <div className="movie-poster" onClick={trailer}>
        
        
        <img
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title} 
        />
       
      </div>
       <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorites ? "active" : ""}`}
            onClick={onfav}
          >
            {favorites ? "💞" : "❤️"}
          </button>
        </div>
      <div className="movie-info">
       
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
       
    </div>
  );
}
