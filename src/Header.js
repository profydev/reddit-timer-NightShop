import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sign from './assets/logoTimer.svg';

const HeaderTag = styled.header`
    padding-left: 80px;
    padding-right: 80px;
    height: 100px;
  `;

const ImageWrapper = styled.a`
    float: left;
    margin-top: 32px;
`;

const NavLink = styled(Link)`
  float: right;
  margin-left: 25.5px;
  font-size: 16px;
  line-height: 102px;
  text-decoration: none;
`;
function Header() {
  return (
    <HeaderTag>
      <ImageWrapper href="/">
        <img src={sign} alt="logo" />
      </ImageWrapper>
      <NavLink to="/">
        About
      </NavLink>
      <NavLink to="/">
        How it works
      </NavLink>
      <NavLink to="/search">
        Search
      </NavLink>
    </HeaderTag>
  );
}

export default Header;
