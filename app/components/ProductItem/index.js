import React, { Component, PropTypes } from 'react';
import { Button, Grid, Card, Icon, Image } from 'semantic-ui-react';

import { ItemWrapper } from './css';

export class ProductItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Grid.Column width={4}>
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
                <Button primary><Icon name="add square" />Add to cart</Button>
              </div>
            </Card.Content>
          </Card>
        </ItemWrapper>
      </Grid.Column>
    );
  }
}

ProductItem.propTypes = {
  item : PropTypes.object,
};

export default ProductItem;
