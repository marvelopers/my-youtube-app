import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BLACK, GREY_2, GREY_6, WHITE } from 'src/styles/colors';
import { IPHONE_MAX } from 'src/styles/layout';
import { Button } from './Button';

interface FilterButtonProps {
  text: string;
  selected?: boolean;
  onClick: () => void;
}

const FilterButton = ({ text, selected = false, onClick }: FilterButtonProps) => (
  <ButtonWrapper selected={selected} onClick={onClick}>
    {text}
  </ButtonWrapper>
);

export default FilterButton;

const ButtonWrapper = styled(Button)(
  ({ selected }: { selected: boolean }) => css`
    padding: 10px 15px;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 500;
    border-radius: 8px;
    color: ${BLACK};
    border: 1px solid ${selected ? GREY_2 : GREY_6};
    background-color: ${selected ? WHITE : GREY_6};

    @media (max-width: ${IPHONE_MAX}px) {
      width: 100%;
    }
  `,
);
