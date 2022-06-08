import React from 'react';
import { Link } from 'react-scroll';
import { MenuItems } from './menuItems';
import { MenuBar, MenuContainer } from './menuStyle';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuBar>
        {MenuItems.map((item) => {
          return (
            <li key={item.name}>
              <Link to={item.name} smooth={true}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </MenuBar>
    </MenuContainer>
  );
};

export default Menu;
