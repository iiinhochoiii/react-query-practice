import React from 'react';
import * as S from './style';
import { User } from '../../../interfaces/user';

interface Props {
  user: User;
}

const UserListCard = (props: Props) => {
  const { user } = props;

  return (
    <S.Card>
      <S.Content>
        <S.Avatar>
          <img src={user.avatar_url} />
        </S.Avatar>

        <p className="content-username">{user.login}</p>
      </S.Content>
    </S.Card>
  );
};

export default React.memo(UserListCard);
