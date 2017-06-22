import {
  fetchItems,
  fetchItemSuccess,
  fetchItemError,
  updateCartItem,
} from '../actions';

import {
    FETCH_ITEMS,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_ERROR,
    UPDATE_CART_ITEM,
} from '../constants';

describe('HomePage actions', () => {
  describe('fetchItems', () => {
    it('has a type of FETCH_ITEMS', () => {
      const expected = {
        type : FETCH_ITEMS,
      };

      expect(fetchItems()).toEqual(expected);
    });
  });

  describe('fetchItems', () => {
    it('has a type of FETCH_ITEMS_SUCCESS', () => {
      const items    = [];
      const expected = {
        type : FETCH_ITEMS_SUCCESS,
        items,
      };
      expect(fetchItemSuccess(items)).toEqual(expected);
    });
  });

  describe('fetchItems', () => {
    it('has a type of FETCH_ITEMS_ERROR', () => {
      const err      = 'something went wrong.';
      const expected = {
        type : FETCH_ITEMS_ERROR,
        err,
      };
      expect(fetchItemError(err)).toEqual(expected);
    });
  });

  describe('fetchItems', () => {
    it('has a type of UPDATE_CART_ITEM', () => {
      const item = {
        id      : 1,
        cartQty : 2,
        price   : 25,
        stock   : 2,
      };
      const expected = {
        type : UPDATE_CART_ITEM,
        item,
      };
      expect(updateCartItem(item)).toEqual(expected);
    });
  });
});
