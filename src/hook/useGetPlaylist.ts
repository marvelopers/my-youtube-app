import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetShuffle } from 'src/hook/useGetShuffle';
import { selectVideoList } from 'src/selectors/youtube';
import { youtubeActions } from 'src/features/youtube/youtubeSlice';
import { Video } from 'src/model/youtube';
import { DEFAULT_LIMIT } from 'src/constants/search';

export const useGetPlaylist = () => {
  const dispatch = useDispatch();
  const [watch, setWatch] = useState<Video>();
  const { playList, onShuffle } = useSelector(selectVideoList);
  const { shuffleList } = useGetShuffle();
  const currPlaylist = useMemo(() => (onShuffle ? shuffleList : playList), [onShuffle, playList, shuffleList]);

  const handleClickVideo = useCallback(
    (video: Video, index: number) => {
      setWatch(video);
      dispatch(youtubeActions.setPlayIndex(index));
      dispatch(youtubeActions.playedVideo(video.id.videoId));
    },
    [dispatch],
  );

  console.log('shuffleList', shuffleList);

  useEffect(() => {
    if (currPlaylist.length !== 0 && currPlaylist.length <= DEFAULT_LIMIT) {
      handleClickVideo(currPlaylist[0], 0);
    }
  }, [handleClickVideo, currPlaylist]);

  return { watch, handleClickVideo, currPlaylist };
};
