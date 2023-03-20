import '../scss/main.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.svg';


const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo" /></Navbar.Brand>
        
      </Container>
    </Navbar>
  )
}

export default Header;