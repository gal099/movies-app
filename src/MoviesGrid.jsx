import { MovieCard } from './MovieCard';
import movies from './movies.json';

export function MoviesGrid() {
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
