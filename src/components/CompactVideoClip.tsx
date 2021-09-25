import React from 'react';
import styled from '@emotion/styled';
import { BLACK, GREY_3 } from 'src/styles/colors';

const CompactVideoClip = () => (
  <Wrapper>
    <Img />
    <Info>
      <h3>오춘기에 사업한다고 무작정 회사부터 때려친 서울대생이 한 일은? | 부자탐구생활 11편 원티드</h3>
      <span>셀링테크트리민군MinGoon</span>
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

const Img = styled.div`
  height: 88px;
  width: 50%;
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
