import { produce } from 'immer';
import {
  ITEM_ADDED,
  ITEM_DELETED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Spicy Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Tasty Vegan Ham', price: 10, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    //action.type calls addFunction creator directly
    const item = { uuid: id++, quantity: 1, ...action.payload };
    return [...state, item];
  }

  //Redoing in Immer function
  // if (action.type === ITEM_ADDED) {
  //   produce(state, (draftState) => {
  //     const item = { uuid: id++, quantity: 1, ...action.payload };
  //     draftState.push(item);
  //   });
  // }

  if (action.type === ITEM_DELETED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  // if (action.type === ITEM_PRICE_UPDATED) {
  //   return state.map((item) => {
  //     if (item.uuid === action.payload.uuid) {
  //       return { ...item, price: action.payload.price };
  //     }
  //     return item;
  //   });
  // }
  if (action.type === ITEM_PRICE_UPDATED) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.uuid === action.payload.uuid);
      item.price = parseInt(action.payload.price, 10);
    });
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, quantity: action.payload.quantity };
      }
      return item;
    });
  }

  return state;
};

export default reducer;
