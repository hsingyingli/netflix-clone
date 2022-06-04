import styled from 'styled-components';

export const Container = styled.div`
  background-image: ${({bgImage}) => bgImage};
  background-size: cover;
  background-position: center center;
  height: 70vh;
  width: 100vw;
  position: relative;
  

  :before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8) 99%);
    width: 100%;
    height: 3em;
  }
  
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
  width: min(500px, 80%);
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    width: 5rem;
    height: 2rem;
    margin-right: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: rgba(15,15,14, 0.5);
    font-weight: bold;
  }

  button: hover {
    background-color: rgba(15,15,14, 0.2);
  }
`;
