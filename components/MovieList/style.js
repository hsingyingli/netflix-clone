import styled from 'styled-components'

export const MovieListContainer = styled.div`
  width: 100vw;
  overflow: hidden;
`

export const PlayList = styled.div`
  position: relative;
  display: flex;
  button {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    height: 100%;
    color: white; 
    font-size: 1.5em;
    position: absolute;
  }
  
  .right {
    right: 0;
    z-index: 2;
  }

  .left {
    left: 0;
    z-index: 2;
  }


`

export const Carousel = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
  transform: ${({currentSlide})=>`translateX(-${currentSlide}00%)`};
  position: relative;
`

export const Movie = styled.div`
  min-width: ${({width})=> width}px;
  min-height: ${({height})=> height}px;
  border-radius: 0.5rem;
  overflow: hidden;

  margin: 0 7px;

  position: relative;

  .movie-img {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit:cover;
    max-width: 100%;
    display: block;
    object-position: center;
  }

  .movie-img:hover{
    transform: scale(1.1);
  }
`

