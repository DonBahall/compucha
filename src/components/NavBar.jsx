import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css'
import { ROUTES } from '../utils/routes.js';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <Navbar className={styles.section}>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">            
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="light">
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-bars" style={{color: "#f5f7f9",}} />
            </Dropdown.Toggle>
            
            <Dropdown.Menu>
              <Dropdown.Item href="#action1">Дія 1</Dropdown.Item>
              <Dropdown.Item href="#action2">Дія 2</Dropdown.Item>
              <Dropdown.Item href="#action3">Дія 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Navbar.Collapse>
        <div className={styles.Navbar}>
          <div className={styles.logo}>
              <Link to={ROUTES.SHOP}>
              Logo
              </Link>
          </div>
        </div>
       <Form className={`${styles.NavBar} d-flex`}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              autoComplete='off'
              onChange={() => {}}
              value=""
            />
            <Button variant="secondary">Search</Button>
            <div className={styles.NavBar}></div>
        </Form>
        <Link to={ROUTES.BASKET}>
            <FontAwesomeIcon className="ml-2" icon={faCartShopping} size="1x" style={{color: "#f5f7fa",}} />
            <span>2</span>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;