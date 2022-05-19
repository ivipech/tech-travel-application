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

function Cart() {
  const { state, setState } = useContext(CartContext);
  let j = 0;
  return (
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
                <button type="button">
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
  );
}

export default Cart;
