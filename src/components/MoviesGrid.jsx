import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import styles from './MoviesGride.module.css';

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjE3MTA2NzNhMGRlMjIxNDRmOTAxNDg1YjIyMzEwNiIsInN1YiI6IjYxMDM3ZGFmNDJkODM3MDAyZGUyYTIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FxmflLCnmO_KL0t7MkLkw2p_TVlvlOLbuYHDxkxjAj0',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
