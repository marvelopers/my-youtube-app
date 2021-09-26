import React, { useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import { Video } from 'src/model/youtube';
import ShuffleButton from 'src/components/common/button/ShuffleButton';
import CompactVideoClip from 'src/components/home/CompactVideoClip';
import FilterIcon from 'src/components/icons/FilterIcon';
import { useGetFilter } from 'src/hook/useGetFilter';
import * as Styles from './styles';

interface PlaylistProps {
  playList: Video[];
  onClickVideo: (video: Video) => void;
}

const Playlist = ({ playList, onClickVideo }: PlaylistProps) => {
  const { handleClickFilterIcon } = useGetFilter();

  const handleClickShuffle = useCallback(() => {
    console.log('handleClickShuffle');
  }, []);

  return (
    <Styles.Wrapper>
      <Styles.ButtonWrapper>
        <Styles.FilterIconButton onClick={handleClickFilterIcon}>
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
