import styled from '@emotion/styled';
import { Button } from 'src/components/common/button/Button';
import { BLACK, GREY_1, GREY_3 } from 'src/styles/colors';
import { IPHONE_MAX } from 'src/styles/layout';

export const Frame = styled.iframe`
  width: 100%;
  height: 374px;
  @media (max-width: ${IPHONE_MAX}px) {
    height: 49vw;
  }
`;

export const Wrapper = styled.section`
  flex: 1 1 62%;

  @media (max-width: ${IPHONE_MAX}px) {
    flex: 1 1 100%;
  }
`;

export const Info = styled.div`
  padding: 23px 0px;

  @media (max-width: ${IPHONE_MAX}px) {
    padding: 9px 0px;
  }
`;

export const Title = styled.h4`
  font-size: 18px;
  line-height: 20px;
  color: ${BLACK};
  padding-bottom: 14px;
`;

export const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  border-bottom: 1px solid ${GREY_1};
`;

export const ChannelInfo = styled.span`
  font-size: 15px;
  line-height: 18px;
  color: ${GREY_3};
`;

export const ButtonWrapper = styled(Button)`
  width: 30px;
  height: 24px;
`;

export const Desc = styled.p`
  padding-top: 11px;
  font-size: 15px;
  line-height: 18px;
  color: ${BLACK};
`;
