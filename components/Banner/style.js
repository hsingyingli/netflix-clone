import styled from 'styled-components';

export const Container = styled.div`
  background-image: ${({bgImage}) => bgImage};
  background-size: cover;
  background-position: center center;
  height: 80vh;
  width: 100vw;
  position: relative;

  
  :after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1) 80%);
    width: 100%;
    height: 5em;
  }
`;

export const VideoInfo = styled.section`
  height: 100%;
  max-width: min(700px, 80%);
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  h1>span {
    font-size: 3rem;
    background-color: rgba(0, 0, 0, 0.5);
  }

  p>span {
    font-size: 1.2rem;
    background-color: rgba(0, 0, 0, 0.5);
  }

  button {
    width: 5rem;
    height: 2rem;
    margin-right: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: rgba(15,15,14, 0.8);
    font-weight: bold;
  }

  button: hover {
    background-color: rgba(15,15,14, 0.2);
    color: ${({theme})=>theme.color.gray300};
  }


  @media only screen and ${({theme})=>theme.breakpoints.md} {
    h1>span {
      font-size: 1.5rem;
    }

    p>span {
      font-size: 1rem;
    }
  }

`;
