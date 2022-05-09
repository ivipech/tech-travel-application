import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/Logo.svg';

import { Container, HeaderContainer, Cart } from './styles';

function Header() {
  return (
    <Container>
      <HeaderContainer>
        <img src={logo} alt="Logo" />
        <Cart>
          <div>
            <span>0</span>
          </div>
          <FaShoppingCart size={36} color="#fff" />
        </Cart>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
