import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetShuffle } from 'src/hook/useGetShuffle';
import { selectVideoList } from 'src/selectors/youtube';
import { youtubeActions } from 'src/features/youtube/youtubeSlice';
import { DEFAULT_LIMIT } from 'src/constants/search';
import { Video } from 'src/model/youtube';

export const useGetPlaylist = () => {
  const dispatch = useDispatch();
  const [watch, setWatch] = useState<Video>();
  const { playList, onShuffle, playIndex } = useSelector(selectVideoList);
  const { shuffleList } = useGetShuffle();
  const currPlaylist = useMemo(() => (onShuffle ? shuffleList : playList), [onShuffle, playList, shuffleList]);

  const handleClickVideo = useCallback(
    (index: number) => {
      dispatch(youtubeActions.setPlayIndex(index));
    },
    [dispatch],
  );

  useEffect(() => {
    if (currPlaylist.length !== 0 && currPlaylist.length <= DEFAULT_LIMIT) {
      setWatch(currPlaylist[playIndex]);
    }
  }, [handleClickVideo, currPlaylist, playIndex]);

  return { watch, handleClickVideo, currPlaylist };
};
