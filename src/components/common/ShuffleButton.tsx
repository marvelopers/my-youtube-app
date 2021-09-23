import React from 'react';
import styled from '@emotion/styled';
import ShuffleIcon from 'src/components/icons/ShuffleIcon';
import { GREY_1, GREY_5 } from 'src/styles/colors';
import { IPHONE_MAX } from 'src/styles/layout';
import { Button } from './Button';

const ShuffleButton = () => (
  <ButtonWrapper>
    <ShuffleIcon />
    <span>검색결과 셔플 재생</span>
  </ButtonWrapper>
);

export default ShuffleButton;

const ButtonWrapper = styled(Button)`
  padding: 10px 14px;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 500;
  color: ${GREY_1};
  background-color: ${GREY_5};
  border-radius: 8px;

  span {
    margin-left: 7px;
  }

  @media (max-width: ${IPHONE_MAX}px) {
    width: 100%;
  }
`;
