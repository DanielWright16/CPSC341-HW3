
import React from 'react';
import '../index.css';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

