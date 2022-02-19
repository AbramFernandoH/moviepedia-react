import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import './TopNavbar.css'

function TopNavbar() {
  return (
    <Navbar expand="lg" className='TopNavbar position-absolute top-0 left-0 w-100'>
      <Container>
        <Link className="moviepedia-brand" to="/">Moviepedia</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" children={<FaBars />} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/movies">Movies</Link>
            <Link className="nav-link" to="/tvshows">TV Shows</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;