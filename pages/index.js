import Head from 'next/head';
import {useEffect, useState} from 'react';
import Banner from '../components/Banner';
import MoviesList from '../components/MovieList';
import Popup from '../components/Popup';
import {Container, MovieSection} from '../styles/home';
import Magic from '../lib/magic/magic-client';

import {fetchMovies, fetchPopularMovies} from '../lib/axios/axios';
import Layout from '../components/Layout';

export default function Home({
  disnayMovies,
  productivityMovies,
  travelMovies,
  popularMovies,
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
  }, [disnayMovies, productivityMovies, travelMovies, popularMovies]);

  return (
    <Layout>
      <Container>
        {!quota && (
          <Popup content="Have exceeded youtube api quota!! It shows static data. Unable to watch video" />
        )}
        <Head>
          <title>Netflix Clone</title>
          <meta name="description" content="Home page" />
        </Head>
        <Banner movie={popularMovies.data.items[0]} />
        <MovieSection>
          <MoviesList
            title="Popular"
            movies={popularMovies.data.items}
            imgSize="medium"
          />
          <MoviesList
            title="Disney"
            movies={disnayMovies.data.items}
            imgSize="medium"
          />
          <MoviesList
            title="Travel"
            movies={travelMovies.data.items}
            imgSize="medium"
          />
          <MoviesList
            title="Productivity"
            movies={productivityMovies.data.items}
            imgSize="medium"
          />
        </MovieSection>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const disnayMovies = await fetchMovies('disnay trailer');
  const productivityMovies = await fetchMovies('productivity');
  const travelMovies = await fetchMovies('travel');
  const popularMovies = await fetchPopularMovies();

  return {
    props: {
      disnayMovies,
      productivityMovies,
      travelMovies,
      popularMovies,
    },
  };
}
