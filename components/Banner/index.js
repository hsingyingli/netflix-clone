import {useState, useEffect} from 'react'
import {Container, VideoInfo} from './style';
import { fetchNetflixOriginals } from '../../lib/axios/axios';

const Banner = ({title, subTitle, imgUrl}) => {
  const [movie, setMovie] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      const res = await fetchNetflixOriginals()
      setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length-1)])
    }
    fetchData()
  }, [])

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n-1) + "..." : string  
  }
  return (
    <Container bgImage={`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}>
      <VideoInfo>
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        <p>{truncate(movie?.overview, 150)}</p>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
      </VideoInfo>
    </Container>
  );
};

export default Banner;
