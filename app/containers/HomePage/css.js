import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding : 20px;

  .loading {
    display          : flex;
    flex-direction   : column;
    align-items      : center;
    justify-content  : center;
  }

  .shopping-cart {
    position : absolute !important;
    right    : 0;
  }

  .product-list {
    position : absolute !important;
  }

  @media screen and (max-width: 768px) {
    .shopping-cart {
      position : relative !important;
    }

    .product-list {
      position : relative !important;
    }
  }
`;
