// eslint-disable-next-line
import React, { useState, useContext } from 'react';
import Styled from 'styled-components';
import Menu from './Menu';
import { Context } from '../App';

const Component = ({ programName }) => {
  
  const { menus } = useContext(Context);

  return (
    <Header>
      <Logo>{ programName }</Logo>

      <Menu
        menuCategory={ 'main' }
        menus={ menus.main }
      />
      <Menu
        menuCategory={ 'sub' }
        menus={ menus.sub }
      />

    </Header>
  )
}

const Header = Styled.div`
  width: 200px;
  height: 100%;
  color: #fff;
  float: left;
  padding: 10px 20px 10px 10px;
`;
const Logo = Styled.h1`
  width: 100%;
  height: 50px;
  font-size: 24px;
  font-weight: 400;
  line-height: 60px;
  user-select: none;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border-bottom: 1px solid #eeeeee50;
  font-family: 'Baloo Tammudu 2', cursive;

  b {
    font-weight: 500;
    font-family: 'Baloo Tammudu 2', cursive;
  }
`;

export default Component;