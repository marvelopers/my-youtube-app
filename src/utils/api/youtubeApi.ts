import qs from 'qs';
import { Params, Video } from 'src/model/youtube';
import { BASE_URL, HTTP } from './http';

export type ResponseSearchResult = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Video[];
};

export const youtubeApi = {
  getSearchResults: async (params: Params): Promise<any> => {
    const queryString = qs.stringify(params);
    const { data } = await HTTP.get<ResponseSearchResult>(`${BASE_URL}/search/?${queryString}`);

    return data.items;
  },
};
