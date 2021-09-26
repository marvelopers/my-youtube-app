import React from 'react';
import styled from '@emotion/styled/macro';
import { GREY_1 } from 'src/styles/colors';
import { HEADER_SEARCH_BAR_HEIGHT } from 'src/styles/layout';

interface DefaultNoResultProps {
  searchTerms: string;
}

const DefaultNoResult = ({ searchTerms }: DefaultNoResultProps) => (
  <>
    <NoResult>{`‘${searchTerms}’에 대한 검색결과가 없습니다.`}</NoResult>
  </>
);
export default DefaultNoResult;

const NoResult = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  line-height: 25px;
  padding-bottom: ${HEADER_SEARCH_BAR_HEIGHT * 2}px;
  color: ${GREY_1};
`;
