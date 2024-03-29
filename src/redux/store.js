import { createStore } from 'redux';
import { cartReducer } from './reducers/cartReducer';

export const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
