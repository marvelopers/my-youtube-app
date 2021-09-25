import { combineReducers } from '@reduxjs/toolkit';
import YoutubeSlice, { YoutubeState } from 'src/features/youtube/youtubeSlice';

export interface State {
  youtube: YoutubeState;
}

export const rootReducer = combineReducers({
  youtube: YoutubeSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
