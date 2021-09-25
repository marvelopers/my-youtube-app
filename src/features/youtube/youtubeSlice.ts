import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from 'src/constants/filter';
import { Params, Video } from 'src/model/youtube';
import { selectParams } from 'src/selectors/youtube';
import { youtubeApi } from 'src/utils/api/youtubeApi';
import { DEFAULT_LIMIT } from '../../constants/search';

export const API_KEY = 'AIzaSyCd_YTkVELRrudaoBKrVs2ycrkUZKq4CLc';

export interface YoutubeState {
  isLoading: boolean;
  params: Params;
  videoList: {
    alreadyPlayedVideoIds: string[];
    playList: Video[];
  };
  error: Error | null;
}

const initParams: Params = {
  key: API_KEY,
  part: 'snippet',
  q: '원티드랩',
  type: 'video',
  maxResults: DEFAULT_LIMIT,
  order: FilterType.Date,
};

const initialState: YoutubeState = {
  isLoading: false,
  params: initParams,
  videoList: {
    alreadyPlayedVideoIds: [],
    playList: [],
  },
  error: null,
};

export const getVideoList = createAsyncThunk('hospital/getAvailableHours', async (param: string, { getState }: any) => {
  const state = getState();
  const stateParams = selectParams(state);
  const params: Params = { ...stateParams, q: param };
  try {
    const response = await youtubeApi.getSearchResults(params);
    return response;
  } catch (error) {
    if (error) {
      // console.log('ERROR STATUS : ', error.response.status);
      console.log('Video list data could not be received');
    }
    return error;
  }
});

const YoutubeSlice = createSlice({
  name: 'Youtube',
  initialState,
  reducers: {
    search: {
      reducer: (state, action: PayloadAction<string>) => {
        state.params.q = action.payload;
      },
      prepare: (searchTerm: string) => ({ payload: searchTerm }),
    },
    playedVideo: {
      reducer: (state, action: PayloadAction<string>) => {
        state.videoList.alreadyPlayedVideoIds = [...state.videoList.alreadyPlayedVideoIds, action.payload];
      },
      prepare: (videoId: string) => ({ payload: videoId }),
    },
  },
  extraReducers: {
    [getVideoList.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getVideoList.fulfilled.type]: (state, action: PayloadAction<Video[]>) => {
      state.videoList.playList = action.payload;
      state.isLoading = false;
    },
    [getVideoList.rejected.type]: (state) => {
      state.isLoading = false;
      state.videoList.playList = [];
    },
  },
});

export const { actions: youtubeActions } = YoutubeSlice;
export default YoutubeSlice;
