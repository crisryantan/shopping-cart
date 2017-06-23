import React, { Component, PropTypes } from 'react';
import { Button, Grid } from 'semantic-ui-react';

export class ShoppingItem extends Component {
  render() {
    const { item }   = this.props;
    const price      = parseFloat(item.price.replace('£', ''));
    const totalPrice = (price * item.cartQty).toFixed(2);
    return (
      <Grid>
        <Grid.Column
          computer={4}
          tablet={4}
          mobile={8}
        >
          { item.name }
        </Grid.Column>
        <Grid.Column
          computer={3}
          tablet={3}
          mobile={3}
        >
          { item.cartQty }
        </Grid.Column>
        <Grid.Column
          computer={3}
          tablet={2}
          only="computer"
        >
          { price }
        </Grid.Column>
        <Grid.Column
          computer={3}
          tablet={3}
          only="computer"
        >
          { totalPrice }
        </Grid.Column>
        <Grid.Column
          computer={3}
          tablet={4}
          mobile={5}
        >
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
