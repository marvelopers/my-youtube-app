import styled from '@emotion/styled';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectVideoList } from 'src/selectors/youtube';
import { Button } from './common/Button';
import ShuffleButton from './common/ShuffleButton';
import CompactVideoClip from './CompactVideoClip';
import FilterIcon from './icons/FilterIcon';

const Playlist = () => {
  const handleClickShuffle = useCallback(() => {
    console.log('handleClickShuffle');
  }, []);
  const handleClickFilter = useCallback(() => {
    console.log('Open Modal');
  }, []);

  const videoList = useSelector(selectVideoList);

  return (
    <Wrapper>
      <FilterIconButton onClick={handleClickFilter}>
        <FilterIcon />
      </FilterIconButton>
      <ShuffleButton onClick={handleClickShuffle} />
      <List>
        {videoList.map((item) => (
          <CompactVideoClip snippet={item.snippet} />
        ))}
        {/* <CompactVideoClip />
        <CompactVideoClip />
        <CompactVideoClip />
        <CompactVideoClip /> */}
      </List>
    </Wrapper>
  );
};

export default Playlist;

const Wrapper = styled.section`
  position: relative;
`;
const FilterIconButton = styled(Button)`
  position: absolute;
  /* TODO:  7px */
  top: -20px;
  right: 0;
`;

const List = styled.ul`
  width: 400px;
  border: 1px solid pink;
  margin-top: 13px;
`;
