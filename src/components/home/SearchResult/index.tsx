import React from 'react';
import styled from '@emotion/styled';
import { IPHONE_MAX } from 'src/styles/layout';
import { useGetPlaylist } from 'src/hook/useGetPlaylist';
import Player from 'src/components/home/Player';
import Playlist from 'src/components/home/Playlist';

const SearchResult = () => {
  const { watch, handleClickVideo, currPlaylist } = useGetPlaylist();

  return (
    <>
      {watch && (
        <Wrapper>
          <Player video={watch} playlist={currPlaylist} />
          <Playlist playList={currPlaylist} onClickVideo={handleClickVideo} />
        </Wrapper>
      )}
    </>
  );
};

export default SearchResult;

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 0px 20px;

  @media (max-width: ${IPHONE_MAX}px) {
    flex-wrap: wrap;
    padding: 0px 15px;
  }
`;
