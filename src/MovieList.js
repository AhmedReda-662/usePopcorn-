import { Movie } from "./Movie";

export function MovieList({ movies, onSelecteMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelecteMovie}
        />
      ))}
    </ul>
  );
}
