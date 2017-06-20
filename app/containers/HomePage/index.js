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

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProductList from 'components/ProductList';

import {
  fetchItems,
} from './actions';

import {
  makeSelectItems,
  makeSelectFetchingSuccess,
  makeSelectFetchingError,
} from './selectors';

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.getItems();
  }

  render() {
    const { items, fetchingSuccess, fetchingError } = this.props;
    return (
      <div>
        <ProductList items={items} fetchingError={fetchingError} fetchingSuccess={fetchingSuccess} />
      </div>
    );
  }
}

HomePage.propTypes = {
  getItems        : PropTypes.func,
  items           : PropTypes.array,
  fetchingError   : PropTypes.bool,
  fetchingSuccess : PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  items           : makeSelectItems(),
  fetchingSuccess : makeSelectFetchingSuccess(),
  fetchingError   : makeSelectFetchingError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getItems : () => dispatch(fetchItems()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
