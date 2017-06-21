import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Grid, Card } from 'semantic-ui-react';

export class ShoppingCart extends Component {

  renderItem(item) {
    let itemElement = '';
    if (item.currentStock > 0) {
      itemElement = (
        <div key={item.id}>
          {item.name}
        </div>
      );
    }
    return itemElement;
  }

  render() {
    const { items } = this.props;
    return (
      <Card>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4} />
            <Grid.Column width={3}>
              Quantity
            </Grid.Column>
            <Grid.Column width={3}>
              Price
            </Grid.Column>
            <Grid.Column width={3}>
              Total Price
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
          <Grid.Row>
            { _.map(items, this.renderItem)}
          </Grid.Row>
        </Grid>
      </Card>
    );
  }
}

ShoppingCart.propTypes = {
  items : PropTypes.array,
};

export default ShoppingCart;
