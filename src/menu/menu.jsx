import React from 'react';
import { Link } from 'react-scroll';
import { Box } from '../common/boxes';
import { MenuItems } from './menuItems';
import { MenuBar, MenuContainer } from './menuStyle';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuBar>
        {MenuItems.map((item) => {
          return (
            <Box key={item.name}>
              <Link to={item.name} smooth={true}>
                {item.name}
              </Link>
            </Box>
          );
        })}
      </MenuBar>
    </MenuContainer>
  );
};

export default Menu;
