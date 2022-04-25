import { useReducer } from 'react';
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
      //if action type is UPDATE_PRODUCTS, return new state object
      case UPDATE_PRODUCTS:
          return {
              ...state,
              products: [...action.products],
          };
        //if action type is UPDATE_Categories, return new state
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        //if its none of these actions, dont update
        default:
            return state;
  }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}