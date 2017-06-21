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
    position    : fixed;
    top         : 20px;
    right       : 0;
    padding-top : 0px;
  }
`;
