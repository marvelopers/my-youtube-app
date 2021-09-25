import { createSelector } from '@reduxjs/toolkit';
import { selectYoutube } from 'src/selectors';

export const selectVideoList = createSelector(selectYoutube, (state) => state.videoList);
export const selectParams = createSelector(selectYoutube, (state) => state.params);
