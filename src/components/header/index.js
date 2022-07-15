import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart';
import logo from '../../assets/Logo.svg';

import { Container, HeaderContainer, Cart } from './styles';

function Header() {
  const { state, setState } = useContext(CartContext);

  const totalquantity = state.cart.reduce(
    (acc, travel) => acc + travel.quantity,
    0
  );

  const CART_DEFAULT = (
    <Cart>
      <div>
        <span>{totalquantity}</span>
      </div>
      <FaShoppingCart size={36} color="#fff" />
    </Cart>
  );
  const [cart, setCart] = useState(CART_DEFAULT);

  const borrarCaritoHnadler = () => {
    console.log('Borrando carrito');
    setCart(<Cart />);
  };

  const regresarCarrito = () => {
    setCart(CART_DEFAULT);
  };

  return (
    <Container>
      <HeaderContainer>
        <Link to="/" onClick={regresarCarrito}>
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/cart" onClick={borrarCaritoHnadler}>
          {cart}
        </Link>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
