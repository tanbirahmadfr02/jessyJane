/* eslint-disable no-unused-vars */
import {React} from 'react'
import {Nav} from 'react-bootstrap';
import '../Menu/Menu.css'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineBars} from 'react-icons/ai'

function Menu() {
  return (
    <>
<nav id='mainMenu' className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" href="#">Jessy Jane</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span> <AiOutlineBars /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <Link className='navLink'>Home</Link>
        <Link className='navLink'>Service</Link>
        <Link className='navLink'>Portfolio</Link>
        <Link className='navLink'>Blog</Link>
        <Link className='navLink'>Contact</Link>
      </ul>
      <div className='socialIcon'>
        <Nav.Link className='icon'><FaFacebookF/></Nav.Link>
        <Nav.Link className='icon'><AiOutlineTwitter/></Nav.Link>
        <Nav.Link className='icon'><BiLogoLinkedin/></Nav.Link>
        <Nav.Link className='icon'><FaInstagram/></Nav.Link>
       </div>
    </div>
  </div>
</nav>
    {/* <Navbar expand="lg" className="" id='mainMenu'>
      <Container>
        <div className='main'>
        <Linkavbar.Brand href="#home"> </Liavbar.Brandnk>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <div>
       <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        
          </Nav>
        </Navbar.Collapse>
       </div>
      
        </div>
      </Container>
    </Navbar> */}
    </>
  )
}

export default Menu