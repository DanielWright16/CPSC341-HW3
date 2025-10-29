const API_KEY = 'cb20ec6c5fc11e20850f6f1a191c400f';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies({ query = '', sortBy = 'popularity.desc', page = 1 }) {
  const endpoint = query
    ? `/search/movie?query=${encodeURIComponent(query)}`
    : `/discover/movie?sort_by=${sortBy}`;
  const url = `${BASE_URL}${endpoint}&api_key=${API_KEY}&language=en-US&page=${page}`;

  const response = await fetch(url);
  const data = await response.json();
  return { results: data.results, total_pages: data.total_pages };
}
