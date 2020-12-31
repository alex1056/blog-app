import React from 'react';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import Styled from 'styled-components';

const Styles = Styled.div`
    {
      background: #4a90e2;
      background-color: #4a90e2;
      border-color: #4a90e2;
    }
  `;

export default function DropDown() {
  return (
    <>
      {/* <Nav variant="pills" activeKey="1" onSelect={handleSelect}> */}
      <Nav variant="pills" activeKey="1">
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item" href="/home">
            NavLink 2 content
          </Nav.Link>
        </Nav.Item>
        <Styles>
          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            {/* <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
        </Styles>
      </Nav>
    </>
  );
}
