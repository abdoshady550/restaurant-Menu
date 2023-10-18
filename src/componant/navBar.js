
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar( {filterBySearch} ) {

  const [searchWord,setSearchWord]=useState('')

  const onSearch=(e)=>{
    e.preventDefault()
    filterBySearch(searchWord)
    setSearchWord('')

    
  }
  return (
    <Navbar bg='dark'variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#"><div className='logo'>RESTAURANT</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search.."
              className="mx-3"
              onChange={(e)=>setSearchWord(e.target.value)}
              value={searchWord}
            />
            <button onClick={(e)=>{onSearch(e)}} className='btn-style'>Search</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;