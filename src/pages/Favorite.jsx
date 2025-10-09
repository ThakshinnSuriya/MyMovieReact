import "../css/Favorites.css"
import { useMovieContext } from "../context/movieContext"
import MovieCard from "../components/MovieCard"
export default function Favorite(){
    const {favorites}=useMovieContext();
   
    if(favorites.length!=0){
        return(
            <div className="favorites">
                <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map(movies => 
                (
                <MovieCard movie={movies} key={movies.id}/>
            
                ))}
            </div></div>
        )
    }
    
    return(
        <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies!!</p>
        </div>
    )
}