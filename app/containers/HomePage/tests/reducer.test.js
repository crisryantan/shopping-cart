import { fromJS } from 'immutable';
import homePageReducer from '../reducer';

import {
  fetchItems,
  fetchItemSuccess,
  fetchItemError,
  updateCartItem,
} from '../actions';

describe('homePageReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      items        : [],
      fetching     : false,
      fetchSuccess : false,
      fetchError   : false,
    });
  });

  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(state);
  });

  it('should handle the fetchItems action correctly', () => {
    const expectedResult = fromJS({
      items        : [],
      fetching     : true,
      fetchSuccess : false,
      fetchError   : false,
    });
    expect(homePageReducer(state, fetchItems())).toEqual(expectedResult);
  });

  it('should handle the fetchItemSuccess action correctly', () => {
    const items = [
      {
        id : 1,
      }, {
        id : 2,
      },
    ];
    const expectedResult = fromJS({
      items,
      fetching     : false,
      fetchSuccess : true,
      fetchError   : false,
    });
    expect(homePageReducer(state, fetchItemSuccess(items))).toEqual(expectedResult);
  });

  it('should handle the fetchItemError action correctly', () => {
    const fetchError = 'something went wrong';
    const expectedResult = fromJS({
      items        : [],
      fetching     : false,
      fetchSuccess : false,
      fetchError,
    });
    expect(homePageReducer(state, fetchItemError(fetchError))).toEqual(expectedResult);
  });

  it('should handle the fetchItemSuccess action correctly', () => {
    const item = {
      id      : 1,
      cartQty : 2,
    };

    const expectedResult = fromJS({
      items        : [],
      fetching     : false,
      fetchSuccess : false,
      fetchError   : false,
    });
    expect(homePageReducer(state, updateCartItem(item))).toEqual(expectedResult);
  });
});
