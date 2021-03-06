import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  Total,
} from './styles';
import Newsletter from '../../components/newsletter';

function Cart() {
  const { state, setState } = useContext(CartContext);

  function handleDeleteCart(travel) {
    const copyCart = [...state.cart];
    const travelIndex = copyCart.findIndex((el) => el.id === travel.id);
    copyCart[travelIndex].quantity -= 1;

    if (copyCart[travelIndex].quantity === 0) {
      copyCart.splice(travelIndex, 1);
    }

    setState({
      cart: copyCart,
    });
  }

  let j = 0;
  return (
    <>
      <Container>
        <ContainerList>
          {state.cart.map((el) => {
            j += el.quantity * el.price;
            return (
              <TravelItem>
                <img src={el.photo} alt={el.title} />
                <Info>
                  <p>{el.title}</p>
                  <strong>{el.price}</strong>
                </Info>
                <Quantity readOnly type="number" value={el.quantity} />
                <Subtotal>
                  <p>{el.quantity * el.price}</p>
                  <button type="button" onClick={() => handleDeleteCart(el)}>
                    <MdDelete size={24} color="#0676d9" />
                  </button>
                </Subtotal>
              </TravelItem>
            );
          })}
          <Total>
            <p>TOTAL: </p>
            <span>$ {j}</span>
          </Total>
        </ContainerList>
      </Container>
      <Newsletter theme="orange" />
    </>
  );
}

export default Cart;
