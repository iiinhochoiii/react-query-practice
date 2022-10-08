import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 0;
`;

export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  input[type='text'] {
    width: 300px;
    margin-right: 15px;
  }

  & > button {
    padding: 10px 15px;
    background: none;
    border: 1px solid;
    border-radius: 5px;

    &:hover {
      background-color: #333;
      color: #fff;
    }
  }
  @media screen and (max-width: 856px) {
    justify-content: left;
  }
`;

export const TotalWrap = styled.div`
  margin-bottom: 10px;

  & > h3 {
    margin: 0;
    font-size: 26px;
  }
`;

export const EmptyUsersWrap = styled.div`
  padding: 15px 0;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;

export const LoadingWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;

  & > span {
    margin: auto;
  }
`;
