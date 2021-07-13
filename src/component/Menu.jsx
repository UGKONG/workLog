import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = ({ menuCategory, menus }) => {

  const menuList = useMemo(() => {
    return (
      menus.map((menu) => {
        return (
          <MenuLi key={menu.id} >
            <NavLink
              to={menu.link}
              exact={menu.link === '/'}
              activeClassName="active"
            >
              <i><FontAwesomeIcon icon={menu.icon} /></i>
              {menu.name}
            </NavLink>
          </MenuLi>
        )
      })
    )
  }, [menus]);

  if (menus.length === 0) {
    return <></>;
  }
  return (
    <MenuUl className={menuCategory}>
      {menuList}
    </MenuUl>
  );
}

const MenuUl = Styled.ul`
  &.sub {
    padding-top: 16px;
    margin-top: 16px;
    position: relative;
    border-top: 1px solid #eeeeee50;
  }
`;
const MenuLi = Styled.li`

  position: relative;

  a {
    display: block;
    width: 100%;
    height: 100%;
    font-family: 'Baloo Tammudu 2',cursive;
    text-align: left;
    padding: 6px 10px 2px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  &:hover {
    text-shadow: 0px 0px 2px #fff;
  }

  i {
    font-size: 20px;
    display: inline-block;
    width: 34px;
    height: 26px;
    margin-right: 5px;
    color: #e1e2c7;
    text-align: center;
    transform: translateY(1px);
  }

  a.active {
    background-color: #fff;
    border-radius: 1000px;
    transition: .1s;
    color: #1b5740;
    font-weight: 600;
  }

  a.active i {
    color: #338f6c;
  }
  
`;

export default App;