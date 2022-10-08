import { useInfiniteQuery } from 'react-query';
import { find } from '../../apis/users';

interface Props {
  q: string;
  per_page?: number;
  options?: {
    enabled?: boolean;
  };
}
// 유저의 리스트를 조회하는 custom hook (infinite scroll)
const useUserListData = ({ q = '', per_page = 50, options }: Props) => {
  return useInfiniteQuery(
    'users',
    async ({ pageParam = 1 }) => {
      const res = await find({ q, per_page, page: pageParam });
      return res;
    },
    {
      getNextPageParam: (data, allPages) => {
        const sum = allPages.reduce(
          (acc, cur): number => acc + cur.items.length,
          0
        );

        return data.total_count > sum ? allPages.length + 1 : undefined;
      },
      ...options,
      refetchOnWindowFocus: true,
      staleTime: 60 * 1000, // 1분
    }
  );
};

export default useUserListData;
