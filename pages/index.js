import Head from 'next/head';
import {useEffect, useState} from 'react';
import Banner from '../components/Banner';
import MoviesList from '../components/MovieList';
import Popup from '../components/Popup';
import {Container, MovieSection} from '../styles/home';

import {fetchMovies, fetchPopularMovies} from '../lib/axios/axios';

export default function Home({
      disnayMovies,
      productivityMovies,
      travelMovies,
      popularMovies
}) {

  const [quota, setQuota] = useState(false);
  useEffect(() => {
    if (
      disnayMovies.status &&
      productivityMovies.status &&
      travelMovies.status &&
      popularMovies.status 
    ) {
      setQuota(true);
    }
  }, [
      disnayMovies,
      productivityMovies,
      travelMovies,
      popularMovies
  ]);

  

  return (
    <Container>
      {!quota && <Popup content='Have exceeded youtube api quota!! Not able to watch video here'/>}
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Home page" />
      </Head>
      <Banner movie={popularMovies.data.items[0]}/>
      <MovieSection>
        <MoviesList title="Popular" movies={popularMovies.data.items} imgSize="medium" />
        <MoviesList title="Disney" movies={disnayMovies.data.items} imgSize="medium" />
        <MoviesList title="Travel" movies={travelMovies.data.items} imgSize="medium" />
        <MoviesList title="Productivity" movies={productivityMovies.data.items} imgSize="medium" />
      </MovieSection>

      
    </Container>
  );
}

export async function getServerSideProps() {
  const disnayMovies = await fetchMovies('disnay trailer');
  const productivityMovies = await fetchMovies('productivity');
  const travelMovies = await fetchMovies('travel');
  const popularMovies = await fetchPopularMovies();

  console.log(disnayMovies)
  console.log(productivityMovies)
  console.log(travelMovies)
  console.log(popularMovies)

  return {
    props: {
      disnayMovies,
      productivityMovies,
      travelMovies,
      popularMovies
    },
  };
}
