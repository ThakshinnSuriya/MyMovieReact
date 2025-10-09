import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setfavorites] = useState([]);

  useEffect(() => {
    const storedfav = localStorage.getItem("favorites");

    if (storedfav) setfavorites(JSON.parse(storedfav));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addfav = (movie) => {
    setfavorites((prev) => [...prev, movie]);
  };

  const remfav = (movieId) => {
    setfavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };
  const value = {
    favorites,
    addfav,
    remfav,
    isFav,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
