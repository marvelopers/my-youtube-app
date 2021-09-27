import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVideoList } from 'src/selectors/youtube';
import { youtubeActions } from 'src/features/youtube/youtubeSlice';

export const useGetShuffle = () => {
  const dispatch = useDispatch();
  const { alreadyPlayedVideoIds, myLikeVideoIds, playList, onShuffle } = useSelector(selectVideoList);

  const makeShuffleList = useCallback(() => {
    const unwatchedList = playList.filter((prev) => !alreadyPlayedVideoIds.includes(prev.id.videoId));
    const likePlaylist = unwatchedList.filter((prev) => myLikeVideoIds.includes(prev.id.videoId));
    const normalPlaylist = unwatchedList.filter((prev) => !myLikeVideoIds.includes(prev.id.videoId));

    return [...likePlaylist, ...normalPlaylist];
  }, [alreadyPlayedVideoIds, myLikeVideoIds, playList]);

  const shuffleList = useMemo(() => (onShuffle ? makeShuffleList() : []), [makeShuffleList, onShuffle]);

  const handleClickShuffle = useCallback(() => {
    dispatch(youtubeActions.switchedShuffle(!onShuffle));
  }, [dispatch, onShuffle]);

  return { handleClickShuffle, onShuffle, shuffleList };
};
