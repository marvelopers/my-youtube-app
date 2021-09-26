import React, { useCallback } from 'react';
// import { useSelector } from 'react-redux';
import { Video } from 'src/model/youtube';
import { ModalHandler } from 'src/utils/ModalHandler';
import { ModalType } from 'src/constants/modal';

// import { selectVideoList } from 'src/selectors/youtube';
import ShuffleButton from 'src/components/common/button/ShuffleButton';
import CompactVideoClip from 'src/components/home/CompactVideoClip';
import FilterIcon from 'src/components/icons/FilterIcon';
import Filters from 'src/components/modals/content/Filters';
import * as Styles from './styles';

interface PlaylistProps {
  playList: Video[];
  onClickVideo: (video: Video) => void;
}

const Playlist = ({ playList, onClickVideo }: PlaylistProps) => {
  const handleClickShuffle = useCallback(() => {
    console.log('handleClickShuffle');
  }, []);

  const handleClickFilter = useCallback(() => {
    ModalHandler.show(ModalType.Apply, {
      title: '정렬',
      contents: <Filters />,
      buttonText: '적용하기',
    });
  }, []);

  return (
    <Styles.Wrapper>
      <Styles.ButtonWrapper>
        <Styles.FilterIconButton onClick={handleClickFilter}>
          <FilterIcon />
        </Styles.FilterIconButton>
        <ShuffleButton onClick={handleClickShuffle} />
      </Styles.ButtonWrapper>
      <Styles.List>
        {playList.map((item) => (
          <CompactVideoClip video={item} onClickVideo={onClickVideo} />
        ))}
      </Styles.List>
    </Styles.Wrapper>
  );
};

export default Playlist;
