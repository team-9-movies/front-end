import { Navbar, Container, Nav } from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

  const {
    // isLoading,
    isAuthenticated,
    // error,
    user,
    // loginWithRedirect,
    // logout,
  } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><img alt="" src="/popcorn.png" width="30" height="30" className="d-inline-block align top"/>{' '}The Movie Critic</Navbar.Brand>
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
