import Head from 'next/head';
import {useEffect, useState} from 'react';
import Banner from '../components/Banner';
import MoviesList from '../components/MovieList';
import {Container, MovieSection} from '../styles/home';

import {fetchMovies} from '../lib/axios/axios';

export default function Home({
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentariesMovies,
}) {
  const [quota, setQuota] = useState(false);
  useEffect(() => {
    if (
      actionMovies ||
      comedyMovies ||
      horrorMovies ||
      romanceMovies ||
      documentariesMovies
    ) {
      setQuota(true);
    }
  }, [
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentariesMovies,
  ]);

  if (!quota) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        Have exceeded youtube api quota, try tomorrow!!
      </div>
    );
  }
  return (
    <Container>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Home page" />
      </Head>
      <Banner />
      <MovieSection>
        <MoviesList title="Comedy" movies={comedyMovies} imgSize="medium" />
        <MoviesList title="Action" movies={actionMovies} imgSize="medium" />
        <MoviesList title="Horror" movies={horrorMovies} imgSize="medium" />
        <MoviesList title="Romance" movies={romanceMovies} imgSize="medium" />
        <MoviesList
          title="Documentaries"
          movies={documentariesMovies}
          imgSize="medium"
        />
      </MovieSection>
      :
    </Container>
  );
}

export async function getServerSideProps() {
  const actionMovies = await fetchMovies('action');
  const comedyMovies = await fetchMovies('comedy');
  const horrorMovies = await fetchMovies('horror');
  const romanceMovies = await fetchMovies('romance');
  const documentariesMovies = await fetchMovies('documentaries');

  return {
    props: {
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentariesMovies,
    },
  };
}
