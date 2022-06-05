import axios from 'axios';
import movies from '../../data/movies';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
});

export const fetchMovies = async (searchQuery) => {
  try {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const {
      data,
    } = await instance.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=rating&q=${searchQuery}&key=${YOUTUBE_API_KEY}`
    );
    return {data, status: true};
  } catch (error) {
    return {data: movies[searchQuery], status: false};
  }
  return;
};

export const fetchPopularMovies = async () => {
  try {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const {
      data,
    } = await instance.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=TW&key=${YOUTUBE_API_KEY}`
    );
    return {data, status: true};
  } catch (error) {
    return {data: movies['popular'], status: false};
  }
  return
};
