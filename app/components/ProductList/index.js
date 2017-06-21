import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Grid } from 'semantic-ui-react';

import ProductItem from 'components/ProductItem';

export class ProductList extends Component {

  renderItem(item) {
    return (
      <ProductItem item={item} key={item.id} />
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
  items : PropTypes.array,
};

export default ProductList;
