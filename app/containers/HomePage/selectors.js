import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = (state) => state.get('homePage');

/**
 * Other specific selectors
 */

const makeSelectFetching = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('fetching')
);

const makeSelectFetchingSuccess = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('fetchSuccess')
);

const makeSelectFetchingError = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('fetchError')
);

export {
  selectHomePageDomain,
  makeSelectFetching,
  makeSelectFetchingSuccess,
  makeSelectFetchingError,
};
