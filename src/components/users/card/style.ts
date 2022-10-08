import styled from 'styled-components';

export const Card = styled.div`
  padding: 15px 0;
  border-top: 1px solid;
`;

export const Content = styled.div`
  display: flex;

  .content-username {
    margin: auto 0 auto 20px;
    font-size: 18px;
    font-weight: bold;
  }

  & > a {
    margin: auto 0 auto auto;
    border: 1px solid #333;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

export const Avatar = styled.div`
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
