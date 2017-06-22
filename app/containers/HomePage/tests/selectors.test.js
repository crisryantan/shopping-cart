import { fromJS } from 'immutable';

import {
  selectHomePageDomain,
  makeSelectItems,
  makeSelectFetching,
  makeSelectFetchingSuccess,
  makeSelectFetchingError,
} from '../selectors';

describe('selectHomePageDomain', () => {
  it('should select the homePage state', () => {
    const homePageState = fromJS({});
    const mockedState   = fromJS({
      homePage : homePageState,
    });
    expect(selectHomePageDomain(mockedState)).toEqual(homePageState);
  });
});

describe('makeSelectItems', () => {
  const selector = makeSelectItems();
  it('should select the items state', () => {
    const items       = [];
    const mockedState = fromJS({
      homePage : {
        items,
      },
    });
    expect(selector(mockedState)).toEqual([]);
  });
});

describe('makeSelectFetching', () => {
  const selector = makeSelectFetching();
  it('should select the fetching state', () => {
    const fetching    = true;
    const mockedState = fromJS({
      homePage : {
        fetching,
      },
    });
    expect(selector(mockedState)).toEqual(fetching);
  });
});

describe('makeSelectFetchingSuccess', () => {
  const selector = makeSelectFetchingSuccess();
  it('should select the fetchSuccess state', () => {
    const fetchSuccess = true;
    const mockedState     = fromJS({
      homePage : {
        fetchSuccess,
      },
    });
    expect(selector(mockedState)).toEqual(fetchSuccess);
  });
});

describe('makeSelectFetchingError', () => {
  const selector = makeSelectFetchingError();
  it('should select the fetchError state', () => {
    const fetchError = true;
    const mockedState   = fromJS({
      homePage : {
        fetchError,
      },
    });
    expect(selector(mockedState)).toEqual(fetchError);
  });
});
