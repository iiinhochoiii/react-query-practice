import axios from '../utils/axios';
import { ResponseUser } from '../interfaces/user';

interface ApiProps {
  q?: string;
  per_page?: number;
  page: number;
}

// user의  리스트를 요청하는 api
export const find = async (params: ApiProps): Promise<ResponseUser> => {
  const res = await axios.get('search/users', {
    params: params,
  });

  return res.data;
};
