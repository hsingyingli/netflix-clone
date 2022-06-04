import {useEffect, useState} from 'react'
import {fetchMovies} from '../../lib/axios/axios'
import { MovieListContainer } from './style'; 

const MoviesList = ({title, category}) => {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      const res = await fetchMovies(category)
      setMovies(res.data.results)
      return res;
    }
    fetchData()
  }, [category])
  console.log(movies)

  return (
    <MovieListContainer>
      <h2>{title}</h2>
      
        
    </MovieListContainer>
  )
}

export default MoviesList
