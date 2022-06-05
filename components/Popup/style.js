import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: ${({display})=> display? 'flex' : 'none'};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
  position: fixed;
  top: 0;
  left:0;
`

export const PopupContent = styled.div`
  button {
    background: rgba(0, 0, 0, 0.8);
    border: none;
    color: white;
    float: right;
    cursor: pointer;
  }
`
