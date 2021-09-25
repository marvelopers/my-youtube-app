import qs from 'qs';
import { BASE_URL, HTTP } from './http';

type Params = {
  key: string;
  part: string;
  q: string;
  type: string;
  maxResults: number;
  order: string;
};

export const youtubeApi = {
  getSearchResults: async (params: Params): Promise<any> => {
    const queryString = qs.stringify(params);
    const { data } = await HTTP.get(`${BASE_URL}/search/?${queryString}`);

    return data;
  },
};
