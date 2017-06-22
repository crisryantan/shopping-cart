import React, { Component, PropTypes } from 'react';
import { Button, Grid } from 'semantic-ui-react';

export class ShoppingItem extends Component {
  render() {
    const { item }   = this.props;
    const price      = parseFloat(item.price.replace('£', ''));
    const totalPrice = (price * item.cartQty).toFixed(2);
    return (
      <Grid>
        <Grid.Column width={4}>
          { item.name }
        </Grid.Column>
        <Grid.Column width={3}>
          { item.cartQty }
        </Grid.Column>
        <Grid.Column width={3}>
          { price }
        </Grid.Column>
        <Grid.Column width={3}>
          { totalPrice }
        </Grid.Column>
        <Grid.Column width={3}>
          <Button
            onClick={() => this.props.removeToCart(item)}
            size="mini"
            color="red"
          >
            Remove
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

ShoppingItem.propTypes = {
  removeToCart : PropTypes.func,
  item         : PropTypes.object,
};

export default ShoppingItem;
