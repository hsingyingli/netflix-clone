import {useState, useEffect} from 'react'
import {Container, VideoInfo} from './style';

const Banner = ({movie}) => {

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n-1) + "..." : string  
  }

  const handleOnPlay = () => {
    console.log("Play")
  }
  
  return (
    <Container bgImage={`url(${movie.snippet.thumbnails.high.url})`}>
      <VideoInfo>
        <h1>{truncate(movie.snippet.title, 20)}</h1>
        <p>{truncate(movie.snippet.description, 150)}</p>
        <div>
          <button onClick={handleOnPlay}>Play</button>
          <button>My List</button>
        </div>
      </VideoInfo>
    </Container>
  );
};

export default Banner;
