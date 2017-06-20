/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
} from './constants';

const initialState = fromJS({
  items        : [],
  fetching     : false,
  fetchSuccess : false,
  fetchError   : false,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS :
      return state
        .set('fetching', true)
        .set('fetchSuccess', false)
        .set('fetchError', false);

    case FETCH_ITEMS_SUCCESS :
      return state
        .set('fetching', false)
        .set('fetchSuccess', true)
        .set('fetchError', false)
        .set('items', fromJS(action.items));

    case FETCH_ITEMS_ERROR :
      return state
        .set('fetching', false)
        .set('fetchSuccess', false)
        .set('fetchError', action.err);

    default:
      return state;
  }
}

export default homePageReducer;
