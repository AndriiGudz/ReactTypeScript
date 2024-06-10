import { Link } from 'react-router-dom'

import {
  LayoutComponent,
  Header,
  HeaderLogo,
  NavContainer,
  Main,
  Footer,
  StyledNavLink,
} from './styles'
import Avatar from 'assets/myFoto.jpg'
import { LayoutProps } from './types'

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <Link to='/'>
        <HeaderLogo src={Avatar} alt="Logo" />
        </Link>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/user"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            User
          </StyledNavLink>
          <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Clients
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            About
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogo src={Avatar} alt="Logo" />
      </Footer>
    </LayoutComponent>
  )
}

export default Layout
