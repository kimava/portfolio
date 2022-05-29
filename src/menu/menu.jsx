import React from 'react';
import { MenuItems } from './menuItems';
import { LogoBtn, MenuBar, MenuContainer } from './menuStyle';

const Menu = () => {
  return (
    <MenuContainer>
      <LogoBtn>AVA</LogoBtn>
      <MenuBar>
        {MenuItems.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </MenuBar>
    </MenuContainer>
  );
};

export default Menu;
