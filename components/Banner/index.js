import { useRouter } from 'next/router';
import {Container, VideoInfo} from './style';

const Banner = ({movie}) => {
  const router = useRouter();
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n-1) + "..." : string  
  }

  const handleOnPlay = (e) => {
    e.preventDefault();
    router.push(`/video/${movie.id}`)
  }
  
  return (
    <Container bgImage={`url(${movie.snippet.thumbnails.high.url})`}>
      <VideoInfo>
        <h1><span>{truncate(movie.snippet.title, 20)}</span></h1>
        <p><span>{truncate(movie.snippet.description, 150)}</span></p>
        <div>
          <button onClick={handleOnPlay}>Play</button>
        </div>
      </VideoInfo>
    

    </Container>
  );
};

export default Banner;
