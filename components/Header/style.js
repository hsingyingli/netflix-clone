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
  
`

export const Navbar = styled.nav`
  ul {

  }

  li {
    display: inline;
    margin-left: 1rem;
  }

  @media only screen and ${({theme})=>theme.breakpoints.md} {
    ul {
      display: none;
    }

  }


`
export const UserInfo = styled.div`
  margin-left: auto;
`
