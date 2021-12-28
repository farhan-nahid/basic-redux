import { types } from '../types/types';

const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      name: 'Apple',
      price: 51,
    },
    {
      id: 2,
      name: 'Banana',
      price: 41,
    },
    {
      id: 3,
      name: 'Orange',
      price: 31,
    },
    {
      id: 4,
      name: 'pinapple',
      price: 21,
    },
    {
      id: 5,
      name: 'Apple',
      price: 10,
    },
  ],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      return state;
    }

    default:
      return state;
  }
};
