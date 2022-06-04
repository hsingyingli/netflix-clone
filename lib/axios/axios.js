import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchTrending = async () => {
  return instance.get(
    `/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  );
};
export const fetchNetflixOriginals = async () => {
  return instance.get(`/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_network=213`);
};
export const fetchTopRated = async () => {
  return instance.get(
    `/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  );
};
export const fetchMovies = async ({category}) => {
  return instance.get(`/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${category}`);
};




