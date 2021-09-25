import { createSlice } from '@reduxjs/toolkit';
import { Params } from 'src/model/youtube';
import { DEFAULT_LIMIT } from '../../constants/search';

export const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export interface YoutubeState {
  isLoading: boolean;
  params: Params;
  videoList: [];
  error: Error | null;
}

const initParams: Params = {
  key: API_KEY,
  part: 'snippet',
  q: '원티드랩',
  type: 'video',
  maxResults: DEFAULT_LIMIT,
  order: 'date',
};

const initialState: YoutubeState = {
  isLoading: false,
  params: initParams,
  videoList: [],
  error: null,
};

const YoutubeSlice = createSlice({
  name: 'Youtube',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { actions: youtubeActions } = YoutubeSlice;
export default YoutubeSlice;
