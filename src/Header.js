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

const NavLink = styled.a`
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
      <NavLink href="#about">
        About
      </NavLink>
      <NavLink href="#how-it-works">
        How it works
      </NavLink>
      <NavLink href="/search/javascript">
        Search
      </NavLink>
    </HeaderTag>
  );
}

export default Header;
