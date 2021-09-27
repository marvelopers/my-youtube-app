import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { youtubeActions } from 'src/features/youtube/youtubeSlice';
import { selectVideoList } from 'src/selectors/youtube';

export const useGetShuffle = () => {
  const dispatch = useDispatch();
  const { alreadyPlayedVideoIds, myLikeVideoIds, playList, onShuffle } = useSelector(selectVideoList);

  const makeShuffleList = useCallback(() => {
    const unwatchedList = playList.filter((prev) => !alreadyPlayedVideoIds.includes(prev.id.videoId));
    const likePlaylist = unwatchedList.filter((prev) => myLikeVideoIds.includes(prev.id.videoId));
    const normalPlaylist = unwatchedList.filter((prev) => !myLikeVideoIds.includes(prev.id.videoId));

    console.log('&&unwatchedList', unwatchedList);

    return [...likePlaylist, ...normalPlaylist];
  }, [alreadyPlayedVideoIds, myLikeVideoIds, playList]);

  const shuffleList = useMemo(() => (onShuffle ? makeShuffleList() : []), [makeShuffleList, onShuffle]);

  const handleClickShuffle = useCallback(() => {
    dispatch(youtubeActions.switchedShuffle(!onShuffle));
  }, [dispatch, onShuffle]);

  return { handleClickShuffle, onShuffle, shuffleList };
};

// 초기에 정렬

// 1. 재생한 목록 제외
// 2. 찜한 목록
// 3. 모든 재생 완료 시 멈춤
