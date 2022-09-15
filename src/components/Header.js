import { Navbar, Container, Nav } from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { LinkContainer } from 'react-router-bootstrap';

const Header = (props) => {

  const {
    // isLoading,
    isAuthenticated,
    // error,
    user,
    // loginWithRedirect,
    // logout,
  } = useAuth0();

  return (
    <Navbar bg="info">
      <Container>
        <Navbar.Brand>Movies App</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {isAuthenticated
            ?
            <>
              <Navbar.Text className='me-3'>Hello, {user.name}</Navbar.Text>
              <Nav>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="favorites">
                  <Nav.Link>Favorites</Nav.Link>
                </LinkContainer>
                <LogoutButton />
              </Nav>
            </>
            :
            <LoginButton />
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
