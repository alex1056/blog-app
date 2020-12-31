import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Link from 'next/link';
// import logoSrc from '../../../public/img/logo.svg';
// import { ReactComponent as ReactLogo } from '../../../public/img/logo.svg';
import Logo from '../svg/logo/logo';

export default function Header() {
  // const url = picture.url ?? picture[0].url;

  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="dark"> */}
      <Navbar collapseOnSelect expand="lg" bg="light">
        {/* <Navbar.Brand>
         
        </Navbar.Brand> */}
        <Logo />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="dark" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          {/* <Nav className="mr-auto"> */}
          <Nav className="justify-content-end menu-horizontal">
            {/* <Nav.Link> */}
            <Nav.Item className="mr-3 nav-item-vert-align">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Nav.Item>
            <Nav.Item className="mr-5 nav-item-vert-align">
              <Link href="/">
                <a>Все публикации</a>
              </Link>
            </Nav.Item>

            {/* </Nav.Link> */}
            <Button variant="primary">Log in</Button>
          </Nav>
          {/* <Nav className="mr-auto"> */}
          {/* <Nav className="justify-content-end">
            <Button variant="primary">Log in</Button>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
