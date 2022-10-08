import { useSearchParams } from 'react-router-dom';

// route url의 search 값 조회 하는 custom hooks
// 예) /?data=test 일 때, data(key) 에 대한 값 조회
const useSearchParam = (key: string) => {
  const [searchParams] = useSearchParams();

  const value = searchParams.get(key);

  return value as string;
};

export default useSearchParam;
