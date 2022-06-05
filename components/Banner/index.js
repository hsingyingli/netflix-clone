import {useState, useEffect} from 'react'
import {Container, VideoInfo} from './style';
import { fetchNetflixOriginals } from '../../lib/axios/axios';

const Banner = () => {
  const [movie, setMovie] = useState([]);


  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n-1) + "..." : string  
  }

  const handleOnPlay = () => {
    console.log("Play")
  }
  return (
    <Container bgImage={`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}>
      <VideoInfo>
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        <p>{truncate(movie?.overview, 150)}</p>
        <div>
          <button onClick={handleOnPlay}>Play</button>
          <button>My List</button>
        </div>
      </VideoInfo>
    </Container>
  );
};

export default Banner;
