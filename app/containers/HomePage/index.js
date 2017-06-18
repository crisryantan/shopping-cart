/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectFetching,
  makeSelectFetchingSuccess,
  makeSelectFetchingError,
} from './selectors';

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fetching        : makeSelectFetching(),
  fetchingSuccess : makeSelectFetchingSuccess(),
  fetchingError   : makeSelectFetchingError(),
});

export default connect(mapStateToProps)(HomePage);
