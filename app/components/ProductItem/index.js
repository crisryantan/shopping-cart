import React, { Component, PropTypes } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

import { ItemWrapper } from './css';

export class ProductItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ItemWrapper>
        <Card className="item-card">
          <Image src={item.image} />
          <Card.Content>
            <Card.Header>
              {item.name}
            </Card.Header>
            <Card.Meta>
              {item.price}
            </Card.Meta>
            <Card.Meta className="stock">
              Stock {item.stock}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui buttons">
              <Button
                onClick={() => this.props.addToCart(item)}
                disabled={item.stock < 1}
                primary
              >
                <Icon name="add square" />Add to cart
              </Button>
            </div>
          </Card.Content>
        </Card>
      </ItemWrapper>
    );
  }
}

ProductItem.propTypes = {
  item      : PropTypes.object,
  addToCart : PropTypes.func,
};

export default ProductItem;
