import React from 'react';
import styled from '@emotion/styled';
import { BLACK, GREY_3 } from 'src/styles/colors';
import { Snippet } from 'src/model/youtube';

interface CompactVideoClipProps {
  snippet: Snippet;
}

const CompactVideoClip = ({ snippet }: CompactVideoClipProps) => (
  <Wrapper>
    <Img src={snippet.thumbnails.medium.url} alt="video thumbnail" />
    <Info>
      <h3>{snippet.title}</h3>
      <span>{snippet.channelTitle}</span>
    </Info>
  </Wrapper>
);

export default CompactVideoClip;

const Wrapper = styled.li`
  border: 1px solid purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;

const Img = styled.img`
  height: 91px;
  border: 1px solid purple;
`;

const Info = styled.div`
  border: 1px solid purple;
  position: relative;
  font-size: 12px;
  line-height: 14px;
  height: 100%;

  h3 {
    font-weight: 600;
    color: ${BLACK};
  }

  span {
    font-weight: 400;
    color: ${GREY_3};
    position: absolute;
    bottom: 0;
  }
`;
