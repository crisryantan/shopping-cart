import styled from 'styled-components';

export const ItemWrapper = styled.div`
  margin-bottom: 12px;

  .item-card {
    min-height : 400px;
  }

  .ui.card>.extra, .ui.cards>.card>.extra {
     text-align : center;
  }

  .ui .buttons {
    width : 100%;
  }

  .header {
    font-size     : 14px !important;
    margin-bottom : 10px;
  }

  .meta {
    display : inline-block;
  }

  .stock {
    float : right;
  }
`;
