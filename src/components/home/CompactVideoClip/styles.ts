import styled from '@emotion/styled';
import { BLACK, GREY_3 } from 'src/styles/colors';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  margin-top: 11px;
`;

export const Img = styled.img`
  flex: 1 1 50%;
  max-height: 91px;
  margin-right: 10px;
`;

export const Info = styled.div`
  flex: 1 1 50%;
  position: relative;
  font-size: 12px;
  line-height: 14px;
  height: 100%;
`;

export const Title = styled.h4`
  font-weight: 600;
  color: ${BLACK};
`;

export const Channel = styled.span`
  font-weight: 400;
  color: ${GREY_3};
  position: absolute;
  bottom: 0;
`;
