import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart';
import logo from '../../assets/Logo.svg';

import { Container, HeaderContainer, Cart } from './styles';

function Header() {
  const { state, setState } = useContext(CartContext);
  const [cart, setCart] = useState('');

  const totalquantity = state.cart.reduce(
    (acc, travel) => acc + travel.quantity,
    0
  );

  const borrarCarritoHnadler = () => {
    setCart('cart');
  };

  const mostrarCarritoHnadler = () => {
    setCart('');
  };

  return (
    <Container>
      <HeaderContainer>
        <Link to="/" onClick={mostrarCarritoHnadler}>
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/cart" onClick={borrarCarritoHnadler}>
          <Cart className={cart}>
            <div>
              <span>{totalquantity}</span>
            </div>
            <FaShoppingCart size={36} color="#fff" />
          </Cart>
        </Link>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
