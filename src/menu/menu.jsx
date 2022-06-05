import React from 'react';
import { MenuItems } from './menuItems';
import { MenuBar, MenuContainer } from './menuStyle';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuBar>
        {MenuItems.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </MenuBar>
    </MenuContainer>
  );
};

export default Menu;
