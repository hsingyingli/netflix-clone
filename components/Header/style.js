import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: transparents;
  width: 100vw;
  height: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px 0;
  display: flex;
  align-items: center;
  z-index: 98;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8) 99%);
  
  .logo-img {
    cursor: pointer;
  }
`

export const Navbar = styled.nav`
  ul {
    list-style: none;
  }

  li {
    display: inline;
    margin-left: 1rem;
    cursor: pointer;
  }

  @media only screen and ${({theme})=>theme.breakpoints.md} {
    ul {
      display: none;
    }

  }


`
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 2rem;
  color: white;
  font-size: 1.5em;


  p {
    padding-right: 0.5rem;
    font-size: 1.2rem;
  }

  span {
    display: none;
  }
  
  div {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  div:hover span {
    display: inline;
    font-size: 0.8rem;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem;
    color: white;
    top: 2rem;
    padding 0.125rem;
  }
`

