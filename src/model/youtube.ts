import { FilterType } from 'src/constants/filter';

export type Params = {
  key: string;
  part: string;
  q?: string;
  type: string;
  maxResults: number;
  order: FilterType;
};

export type Video = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
};

export type Snippet = {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
};

export type ThumbnailsType = {
  url: string;
  width: number;
  height: number;
};

export type Thumbnails = {
  default: ThumbnailsType;
  medium: ThumbnailsType;
  high: ThumbnailsType;
};

export type SearchResult = {
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
