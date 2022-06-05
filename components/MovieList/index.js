import { Carousel, Movie, MovieListContainer } from './style'; 
import Image from 'next/image';

const MoviesList = ({title, movies, imgSize}) => {
  return (
    <MovieListContainer>
      <h2>{title}</h2>
      <Carousel>
        {movies?.map((movie)=> {
          const imgUrl = movie.snippet.thumbnails[imgSize].url;
          const width = movie.snippet.thumbnails[imgSize].width;
          const height = movie.snippet.thumbnails[imgSize].height;
          const alt = movie.snippet.title;
          return (
            <Movie key={movie.id.videoId} width={width} height={height}> 
              <Image className='movie-img' src={imgUrl} alt={alt} layout='fill'/>
            </Movie> 
          )
       })}
      </Carousel>
      
        
    </MovieListContainer>
  )
}

export default MoviesList
