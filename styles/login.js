import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-image: linear-gradient( rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), ${({imgUrl})=> `url(${imgUrl})`};
  z-index: 99; 
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
`

export const LoginForm = styled.form`
  min-width: 240px;
  height: 33.333%;
  background: rgba(0, 0, 0, 0.55);
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;

  input,
  input:active,
  input:focus,
  input:hover{
    font-size: 1.2rem;
    padding: 0.8rem;
    border: none;
    outline: none !important;
    border-radius: 5px;
  }
  
  p {
    margin:0.5rem 0;
  }

  button {
    margin-top: 0.5rem;
    height: 3rem;
    background-color: rgb(235,40,33);
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    color: white;
  }

  button:hover {
    color: gray;
  }
`


