import styled from '@emotion/styled';
import React from 'react';
import CompactVideoClip from './CompactVideoClip';

const Playlist = () => (
  <Wrapper>
    <CompactVideoClip />
    <CompactVideoClip />
    <CompactVideoClip />
    <CompactVideoClip />
  </Wrapper>
);

export default Playlist;

const Wrapper = styled.ul`
  width: 400px;
  border: 1px solid pink;
`;
