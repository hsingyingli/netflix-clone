import styled from 'styled-components';

export const VideoContainer = styled.div`
  min-height: calc(100vh - 2rem);
  max-width: ${({theme}) => theme.size.container.md};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
  padding: 0 1.5rem;
  padding-top: 2rem;
`;

export const Video = styled.div`
  margin-top: 3em;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  border-radius: 5px;
  overflow: hidden;

  iframe {
    position: absolute;
    left: 0;
    top: 0;


  }
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;

  .movie-content {
    width: 60%;
    padding: 0.5rem;
    max-height: 23rem;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    .publish-date {
      color: #68d391;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.5rem;
    }
  }

  .movie-subContent {
    width: 40%;
    padding: 0.5rem;

    p {
      color: ${({theme}) => theme.color.gray500};
      font-style: bold;
      font-size: 1.125rem;
    }

    p > span {
      color: white;
      margin-left: 0.5rem;
    }
  }

  @media only screen and ${({theme}) => theme.breakpoints.md} {
    flex-direction: column-reverse;

    .movie-content,
    .movie-subContent {
      width: 100%;
    }
  }
`;
