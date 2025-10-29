import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import { fetchMovies } from './api';


function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const { results, total_pages } = await fetchMovies({ query, sortBy, page });
      setMovies(results);
      setTotalPages(total_pages);
    };
    loadMovies();
  }, [query, sortBy, page]);

  return (
    <>
      <Header />
     <SearchBar
        query={query}
        sortBy={sortBy}
        onQueryChange={setQuery}
        onSortChange={setSortBy}
        resetPage={() => setPage(1)}
      />
      <MovieList movies={movies} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      /> 
    </>
  );
}

export default App;
