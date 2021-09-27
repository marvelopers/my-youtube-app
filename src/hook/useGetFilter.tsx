import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectParams } from 'src/selectors/youtube';
import { getVideoList, youtubeActions } from 'src/features/youtube/youtubeSlice';
import { ModalHandler } from 'src/utils/ModalHandler';
import { ModalType } from 'src/constants/modal';
import { FilterType } from 'src/constants/filter';
import Filters from 'src/components/modals/content/Filters';

export const useGetFilter = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(selectParams);

  const handleClickFilter = useCallback(
    (filter: FilterType) => {
      dispatch(youtubeActions.selectedFilter(filter));
    },
    [dispatch],
  );

  const handleClickApply = useCallback(() => {
    dispatch(getVideoList(''));
  }, [dispatch]);

  const handleClickFilterIcon = useCallback(() => {
    ModalHandler.show(ModalType.Apply, {
      title: '정렬',
      contents: <Filters />,
      buttonText: '적용하기',
      onApply: handleClickApply,
    });
  }, [handleClickApply]);

  return { order, handleClickFilter, handleClickFilterIcon };
};
