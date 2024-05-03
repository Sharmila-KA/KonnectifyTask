import React from 'react';
import styled from 'styled-components';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
// import Complogo from './logo.png';
const Nav = styled.nav`
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  #nav{
      display:flex;
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
 

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const Logo = styled.h1`
  height:67px;
  width:67px;
`;

const NavBar = () => {
  return (
    <Nav id='nav'>
      <Logo><img src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png" alt='Complogo' /></Logo>
      <ul >
        <NavItem><a href="/">Home</a></NavItem>
        <NavItem><a href="/">About</a></NavItem>
        <NavItem><a href="/">Services</a></NavItem>
        <NavItem><a href="/">Contact</a></NavItem>
      </ul>
    </Nav>
  );
};

export default NavBar;