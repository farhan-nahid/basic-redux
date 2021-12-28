import { types } from '../types/types';

export const addToCart = (payload) => {
  return { type: types.ADD_TO_CART, payload };
};
