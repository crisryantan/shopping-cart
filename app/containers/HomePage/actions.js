import {
    FETCH_ITEMS,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_ERROR,
} from './constants';

export function fetchItems() {
  return {
    type : FETCH_ITEMS,
  };
}

export function fetchItemSuccess(items) {
  return {
    type : FETCH_ITEMS_SUCCESS,
    items,
  };
}

export function fetchItemError(err) {
  return {
    type : FETCH_ITEMS_ERROR,
    err,
  };
}
