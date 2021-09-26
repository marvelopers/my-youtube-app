import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { youtubeActions } from 'src/features/youtube/youtubeSlice';
import { selectVideoList } from 'src/selectors/youtube';

export const useGetLikeVideo = (videoId: string) => {
  const dispatch = useDispatch();
  const { myLikeVideoIds } = useSelector(selectVideoList);

  const onHeart = useMemo(() => myLikeVideoIds.includes(videoId), [myLikeVideoIds, videoId]);

  const handleClickHeart = useCallback(
    () =>
      myLikeVideoIds.includes(videoId)
        ? dispatch(youtubeActions.removeMyLikeVideoIds(videoId))
        : dispatch(youtubeActions.setMyLikeVideoIds(videoId)),
    [dispatch, myLikeVideoIds, videoId],
  );

  return { onHeart, handleClickHeart };
};
