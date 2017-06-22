import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';
import { LOCATION_CHANGE } from 'react-router-redux';

import { getItems, watchGetItems } from '../sagas';
import {
  fetchItemSuccess,
  fetchItemError,
} from '../actions';
import {
    FETCH_ITEMS,
} from '../constants';

describe('getItems saga', () => {
  let getItemsGenerator;

  beforeEach(() => {
    const response = {
      data : [
        {
          id    : '40d032a1-378f-4d3a-abfc-786ad6b2681b',
          image : 'http://dummyimage.com/250x250.png/ff4444/ffffff',
          name  : 'Fully-configurable radical internet solution',
          price : '£97.21',
          stock : 7,
        }, {
          id    : '40d032a1-378f-4d3a-abfc-786ad6b2681b',
          image : 'http://dummyimage.com/250x250.png/ff4444/ffffff',
          name  : 'Secured leading edge migration',
          price : '£97.21',
          stock : 5,
        },
      ],
    };

    getItemsGenerator = getItems();

    const callDescriptor = getItemsGenerator.next(response).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch fetchItemSuccess if it requests the data successfully', () => {
    const response = {
      data : [
        {
          id    : '40d032a1-378f-4d3a-abfc-786ad6b2681b',
          image : 'http://dummyimage.com/250x250.png/ff4444/ffffff',
          name  : 'Fully-configurable radical internet solution',
          price : '£97.21',
          stock : 7,
        }, {
          id    : '40d032a1-378f-4d3a-abfc-786ad6b2681b',
          image : 'http://dummyimage.com/250x250.png/ff4444/ffffff',
          name  : 'Secured leading edge migration',
          price : '£97.21',
          stock : 5,
        },
      ],
    };

    const putDescriptor = getItemsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(fetchItemSuccess(response.data)));
  });

  it('should call the fetchItemError action if the response errors', () => {
    const response      = new Error('Some error');
    const putDescriptor = getItemsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(fetchItemError(response)));
  });
});

describe('watchGetItems saga', () => {
  const watchGetItemsSaga = watchGetItems();
  const mockedTask        = createMockTask();

  it('should start task to watch for FETCH_ITEMS action', () => {
    const takeLatestDescriptor = watchGetItemsSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(FETCH_ITEMS, getItems));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = watchGetItemsSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = watchGetItemsSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
