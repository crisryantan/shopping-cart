import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Grid } from 'semantic-ui-react';

import ProductItem from 'components/ProductItem';
import { ProductWrapper } from './css';

export class ProductList extends Component {

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    return (
      <ProductWrapper>
        <ProductItem
          item={item}
          key={item.id}
          addToCart={this.props.addToCart}
        />
      </ProductWrapper>
    );
  }

  render() {
    const { items } = this.props;
    return (
      <Grid>
        <Grid.Row>
          { _.map(items, this.renderItem)}
        </Grid.Row>
      </Grid>
    );
  }
}

ProductList.propTypes = {
  addToCart : PropTypes.func,
  items     : PropTypes.array,
};

export default ProductList;
