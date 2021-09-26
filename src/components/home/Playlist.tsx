import styled from '@emotion/styled';
import React, { useCallback } from 'react';
// import { useSelector } from 'react-redux';
import { Video } from 'src/model/youtube';
import { ModalHandler } from 'src/utils/ModalHandler';
import { ModalType } from 'src/constants/modal';

// import { selectVideoList } from 'src/selectors/youtube';
import { Button } from '../common/Button';
import ShuffleButton from '../common/ShuffleButton';
import CompactVideoClip from './CompactVideoClip';
import FilterIcon from '../icons/FilterIcon';
import Filters from '../modals/content/Filters';

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
    <Wrapper>
      <FilterIconButton onClick={handleClickFilter}>
        <FilterIcon />
      </FilterIconButton>
      <ShuffleButton onClick={handleClickShuffle} />
      <List>
        {playList.map((item) => (
          <CompactVideoClip video={item} onClickVideo={onClickVideo} />
        ))}
      </List>
    </Wrapper>
  );
};

export default Playlist;

const Wrapper = styled.section`
  position: relative;
  flex: 1 1 38%;
`;
const FilterIconButton = styled(Button)`
  position: absolute;
  /* TODO:  7px */
  top: -20px;
  right: 0;
`;

const List = styled.ul`
  /* width: 400px; */
  border: 1px solid pink;
  margin-top: 13px;
`;