import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.warn('Could not save state', e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Could not load state', e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
