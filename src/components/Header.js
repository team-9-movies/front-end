import { Navbar, Container } from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = (props) => {
  return (
    <Navbar bg="info">
      <Container>
        <Navbar.Brand>Movies App</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {props.isAuthenticated
            ?
            <>
              <Navbar.Text className='me-3'>Hello, {props.user.email}</Navbar.Text>
              <LogoutButton />
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
