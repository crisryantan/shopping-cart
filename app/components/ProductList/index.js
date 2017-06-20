import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import ProductItem from 'components/ProductItem';

export class ProductList extends Component {

  renderItem(item) {
    return (
      <ProductItem item={item} key={item.id} />
    );
  }

  render() {
    const { items, fetchingSuccess } = this.props;
    if (items.length && fetchingSuccess) {
      return (
        <div>
          { _.map(items, this.renderItem)}
        </div>
      );
    }
    return (
      <div>fetching..</div>
    );
  }
}

ProductList.propTypes = {
  items           : PropTypes.array,
  fetchingSuccess : PropTypes.bool,
};

export default ProductList;
