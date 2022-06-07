import {useMemo, useRef, useState, useEffect, useCallback} from 'react';
import {Carousel, Movie, MovieListContainer, PlayList} from './style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {MdOutlineChevronLeft, MdOutlineChevronRight} from 'react-icons/md';

const MoviesList = ({title, movies, imgSize}) => {
  const [maxSlides, setMaxSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const numOfMovies = useMemo(() => movies?.length, [movies]);
  const movieRef = useRef(null);
  const carouselRef = useRef(null);
  const router = useRouter();

  const handleResize = useCallback(() => {
    if (movieRef.current && carouselRef.current) {
      const elementWidth = movieRef.current.offsetWidth;
      const screenWidth = carouselRef.current.offsetWidth;
      setMaxSlides(Math.floor((numOfMovies * elementWidth) / screenWidth));
    }
  }, [numOfMovies]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleLeftSlide = () => {
    console.log('maxSlide: ', maxSlides);
    setCurrentSlide((prev) => (prev < 1 ? prev + maxSlides : prev - 1));
  };

  const handleRightSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };


  return (
    <MovieListContainer>
      <h2>{title}</h2>
      <PlayList>
        <button className="left" onClick={handleLeftSlide}>
          <MdOutlineChevronLeft />
        </button>
        <Carousel ref={carouselRef} currentSlide={currentSlide}>
          {movies?.map((movie, id) => {
            const imgUrl = movie.snippet.thumbnails[imgSize].url;
            const width = movie.snippet.thumbnails[imgSize].width;
            const height = movie.snippet.thumbnails[imgSize].height;
            const alt = movie.snippet.title;
            const videoId = movie.id?.videoId || movie.id;
            return (
              <Movie ref={movieRef} key={id} width={width} height={height} onClick={()=> {
                  router.push(`/video/${videoId}`)
              }}>
                <Image
                  className="movie-img"
                  src={imgUrl}
                  alt={alt}
                  layout="fill"
                />
              </Movie>
            );
          })}
        </Carousel>
        
        <button className="right" onClick={handleRightSlide}>
          <MdOutlineChevronRight />
        </button>
      </PlayList>
    </MovieListContainer>
  );
};

export default MoviesList;
