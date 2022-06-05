import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
});

export const fetchMovies = async (searchQuery) => {
  try{
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    const {data: {items}} = await instance.get(`/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`)
    return items;
  } catch (error) {
    console.log(error)
    return null;
  }
  return;
};






