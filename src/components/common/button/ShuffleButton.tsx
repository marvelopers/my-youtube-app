import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GREY_1, GREY_5, BLUE } from 'src/styles/colors';
import { IPHONE_MAX } from 'src/styles/layout';
import ShuffleIcon from 'src/components/icons/ShuffleIcon';
import { Button } from './Button';

interface ShuffleButtonProps {
  selected: boolean;
  onClick: () => void;
}

const ShuffleButton = ({ selected, onClick }: ShuffleButtonProps) => (
  <ButtonWrap onClick={onClick} selected={selected}>
    <ShuffleIcon color={selected ? GREY_5 : GREY_1} />
    <span>검색결과 셔플 재생</span>
  </ButtonWrap>
);

export default ShuffleButton;

const ButtonWrap = styled(Button)(
  ({ selected }: { selected: boolean }) => css`
    justify-content: flex-start;
    padding: 10px 14px;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 500;
    color: ${selected ? GREY_5 : GREY_1};
    background-color: ${selected ? BLUE : GREY_5};
    border-radius: 8px;

    span {
      margin-left: 7px;
    }

    @media (max-width: ${IPHONE_MAX}px) {
      width: 100%;
    }
  `,
);
