import styled from 'styled-components'

export const MovieListContainer = styled.div`
   
`

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

`

export const Movie = styled.div`
  min-width: ${({width})=> width}px;
  min-height: ${({height})=> height}px;

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

