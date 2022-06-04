import Head from 'next/head';
import {useMemo} from 'react';
import Banner from '../components/Banner';
import MoviesList from '../components/MovieList';
import {Container} from '../styles/home';

export default function Home() {
  const Categories = useMemo(
    () => ({
      Action: 28,
      Comedy: 35,
      Horror: 27,
      Romance: 10749,
      Documentaries: 99,
    }),
    [],
  );

  const titles = useMemo(()=> (
    Object.keys(Categories) 
  ), [Categories])

  return (
    <Container>
      <Head>
        <title>Netflix Clone</title>
        <meta
          name="description"
          content="Home page"
        />
      </Head>
      <Banner />
      
      {titles.map((title)=> (
        <MoviesList key={title} title={title} category={Categories[title]}/>
      ))}
    </Container>
  );
}
