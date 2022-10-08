import React, { useMemo } from 'react';
import * as S from './style';

import useUserListData from '../../../hooks/queries/useUserListData';
import UserListCard from '../card';
import useInputs from '../../../hooks/useInputs';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { useNavigate, createSearchParams } from 'react-router-dom';
import useSearchParam from '../../../hooks/useSearchParams';

const UserListComponent = () => {
  const navigate = useNavigate();
  const searchKeyword = useSearchParam('keyword');
  const [value, onChange] = useInputs(searchKeyword || '');

  const { data, refetch, hasNextPage, isFetching, fetchNextPage } =
    useUserListData({
      q: value,
      options: {
        enabled: !!searchKeyword,
      },
    });

  const users = useMemo(
    () => (data ? data.pages.flatMap((data) => data.items) : []),
    [data]
  );

  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const search = () => {
    if (!value) {
      alert('username을 입력해주세요.');
      return;
    }
    navigate({
      pathname: '/',
      search: createSearchParams({
        keyword: value,
      }).toString(),
    });
    refetch();
  };

  return (
    <S.Container>
      <S.SearchWrap>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="username을 입력해주세요."
        />
        <button onClick={() => search()}>검색</button>
      </S.SearchWrap>
      <S.TotalWrap>
        <h3>{data?.pages[0].total_count || 0} Users</h3>
      </S.TotalWrap>
      {users?.map((item) => (
        <UserListCard key={item.id} user={item} />
      ))}

      {hasNextPage && <div ref={ref} />}
    </S.Container>
  );
};

export default UserListComponent;
