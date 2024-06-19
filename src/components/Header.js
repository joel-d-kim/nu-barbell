import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #FFFFFF;
  padding: 0px 0;
  box-shadow: 0 4px 2px -2px gray;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #141414;
  font-weight: bold;
  &:hover {
    color: #000000;
  }
`;

const ImageLink = styled(Link)`
  display: flex;
  align-items: center;
`;
const HomeButtonImage = styled.img`
  width: 125px;
  height: auto; 
  cursor: pointer; 
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ImageLink to="/">
          <HomeButtonImage src="/images/NYU_BARBELL_LOGO.jpg" alt="Home" />
        </ImageLink>
        <NavLink to="/about">Team</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
