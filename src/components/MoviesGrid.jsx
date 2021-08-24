import { useEffect, useState } from 'react';
import { useQuery } from '../hooks/useQuery';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGride.module.css';
import { Spinner } from './Spinner';

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const query = useQuery();
  const search = query.get('search');

  useEffect(() => {
    setisLoading(true);
    const searchUrl = search
      ? '/search/movie?query=' + search
      : '/discover/movie';
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setisLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
