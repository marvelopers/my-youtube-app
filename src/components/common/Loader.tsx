import React from 'react';
import styled from '@emotion/styled/macro';
import { GREY_1 } from 'src/styles/colors';
import { ZIndex } from 'src/styles/zIndex';

const Loader = () => (
  <LoaderWrapper>
    <Load>검색결과 로딩중...</Load>
  </LoaderWrapper>
);
export default Loader;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${ZIndex.LoaderBackground};
`;

const Load = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  line-height: 25px;
  color: ${GREY_1};
`;
