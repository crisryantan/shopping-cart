import React, { Component, PropTypes } from 'react';

export class ProductItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        {item.name}
      </div>
    );
  }
}

ProductItem.propTypes = {
  item : PropTypes.object,
};

export default ProductItem;
