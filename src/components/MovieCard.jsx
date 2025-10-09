import "../css/MovieCard.css";
import { useMovieContext } from "../context/movieContext";
export default function MovieCard({ movie }) {
  const { isFav, addfav, remfav } = useMovieContext();
  const favorites = isFav(movie.id);

  function onfav(e) {
    e.preventDefault();
    if (favorites) remfav(movie.id);
    else addfav(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorites ? "active" : ""}`}
            onClick={onfav}
          >
            {favorites ? "💞" : "❤️"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
