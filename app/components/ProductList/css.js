import styled from 'styled-components';

export const ProductWrapper = styled.div`
    position: relative;
    display: inline-block;
    padding-left: 1rem;
    padding-right: 1rem;
    vertical-align: top;
    width: 25%;

    @media only screen and (max-width: 1300px) {
      width: 50%;

      .item-card {
        width : 100%;
      }
    }

    @media only screen and (max-width: 468px){
      width: 100%; 
    }
`;
