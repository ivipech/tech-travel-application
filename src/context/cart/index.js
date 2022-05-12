import React, { createContext, useState } from 'react';

const DEFAULT_VALUE = {
  state: {
    cart: [],
  },
  setState: () => {},
};

const CartContext = createContext(DEFAULT_VALUE);

function CartContextProvider({ children }) {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ state, setState }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };
export default CartContext;
