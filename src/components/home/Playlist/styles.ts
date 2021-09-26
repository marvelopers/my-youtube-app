import styled from '@emotion/styled';
import { Button } from 'src/components/common/button/Button';
import { IPHONE_MAX } from 'src/styles/layout';

export const Wrapper = styled.section`
  flex: 1 1 38%;
  padding-left: 11px;

  @media (max-width: ${IPHONE_MAX}px) {
    padding: 50px 0px 13px;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const FilterIconButton = styled(Button)`
  position: absolute;
  top: -38px;
  right: 0;

  @media (max-width: ${IPHONE_MAX}px) {
    top: -28px;
  }
`;

export const List = styled.ul`
  padding-bottom: 13px;

  @media (max-width: ${IPHONE_MAX}px) {
  }
`;
