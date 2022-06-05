import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: transparents;
  width: 100vw;
  height: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px 0;
  display: flex;
  align-items: center;
  z-index: 99;
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
export const UserInfo = styled.nav`
  margin-left: auto;
`
