import styled from 'styled-components';

export const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;

  @media screen and (max-width: 856px) {
    width: calc(100% - 20px);
  }
`;
