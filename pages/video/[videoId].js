import {useRouter} from 'next/router';
import {VideoContainer, Video, VideoInfo} from '../../styles/video';
import Layout from '../../components/Layout';
import {fetchMovieById} from '../../lib/axios/axios';

const VideoPage = ({movie}) => {
  const router = useRouter();
  return (
    <Layout>
      <VideoContainer>
        <Video>
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://www.youtube.com/embed/${router.query.videoId}?control=0&autoplay=0&origin=http://example.com`}
          />
        </Video>
        <VideoInfo>
          <div className="movie-content">
            <p className="publish-date">{movie.snippet?.publishedAt}</p>
            <p>{movie.snippet?.localized?.title}</p>
            <p>{movie.snippet?.localized?.description}</p>
          </div>

          <div className="movie-subContent">
            <p>
              Cast: <span>{movie.snippet?.channelTitle}</span>
            </p>
            <p>
              View: <span>{movie.statistics?movie.statistics.viewCount:movie.statistics}</span>
            </p>
          </div>
        </VideoInfo>
      </VideoContainer>
    </Layout>
  );
};


export async function getStaticPaths() {
  const movieId = ['9ZYDaElluxY', 'vEqpT2eL3nA']  

  const paths = movieId.map((id)=> {
    return {params: {videoId: id}} 
  })
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({params}) {
  const res = await fetchMovieById(params.videoId) 

  const movie = res.data?.items?.length > 0 ? res.data.items[0] : {}
  return {
    props: {
      movie
    },

    revalidate: 10, // in second
  }
}


export default VideoPage;
