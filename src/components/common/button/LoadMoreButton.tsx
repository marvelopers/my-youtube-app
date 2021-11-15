import React from 'react';
import styled from '@emotion/styled';
import { GREY_1, GREY_BACKGROUND_RGB, BLUE, WHITE } from 'src/styles/colors';
import { IPHONE_MAX } from 'src/styles/layout';
import { Button } from 'src/components/common/button/Button';

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton = ({ onClick }: LoadMoreButtonProps) => (
  <ButtonWrap onClick={onClick}>
    <span>검색결과 더보기</span>
  </ButtonWrap>
);

export default LoadMoreButton;

const ButtonWrap = styled(Button)`
  justify-content: center;
  padding: 10px 14px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${GREY_1};
  background-color: ${GREY_BACKGROUND_RGB};
  transition: 0.2s;
  border-radius: 8px;
  margin: 4px auto 20px;

  :hover {
    color: ${WHITE};
    background-color: ${BLUE};
  }

  @media (max-width: ${IPHONE_MAX}px) {
    width: 100%;
    color: ${WHITE};
    background-color: ${BLUE};
  }
`;
