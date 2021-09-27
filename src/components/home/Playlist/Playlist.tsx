import React from 'react';
import { Video } from 'src/model/youtube';
import ShuffleButton from 'src/components/common/button/ShuffleButton';
import CompactVideoClip from 'src/components/home/CompactVideoClip';
import FilterIcon from 'src/components/icons/FilterIcon';
import { useGetFilter } from 'src/hook/useGetFilter';
import { useGetShuffle } from 'src/hook/useGetShuffle';
import * as Styles from './styles';

interface PlaylistProps {
  playList: Video[];
  onClickVideo: (video: Video, index: number) => void;
}

const Playlist = ({ playList, onClickVideo }: PlaylistProps) => {
  const { handleClickFilterIcon } = useGetFilter();
  const { handleClickShuffle, onShuffle } = useGetShuffle();

  return (
    <Styles.Wrapper>
      <Styles.ButtonWrapper>
        <Styles.FilterIconButton onClick={handleClickFilterIcon}>
          <FilterIcon />
        </Styles.FilterIconButton>
        <ShuffleButton selected={onShuffle} onClick={handleClickShuffle} />
      </Styles.ButtonWrapper>
      <Styles.List>
        {playList.map((item, index) => (
          <CompactVideoClip key={item.id.videoId} video={item} onClickVideo={() => onClickVideo(item, index)} />
        ))}
      </Styles.List>
      {!onShuffle && <button type="button">검색결과 더보기</button>}
    </Styles.Wrapper>
  );
};

export default Playlist;
