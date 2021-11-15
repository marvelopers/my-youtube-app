import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { ModalDuration } from 'src/constants/modal';
import { WHITE, BLUE } from 'src/styles/colors';
import { ZIndex } from 'src/styles/zIndex';
import { Button } from 'src/components/common/button/Button';
import { IPHONE_MAX } from 'src/styles/layout';

interface ModalContainerParams {
  isShow: boolean;
}

export const Title = styled.h3`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 0px 20px 25px;
`;
export const ApplyButton = styled(Button)`
  color: ${WHITE};
  background-color: ${BLUE};
  width: 100%;
  border-radius: 17.5px;
  padding: 14px;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 20px;
`;

export const IconWrapper = styled.div`
  width: 17px;
  height: 17px;
`;

export const ModalHead = styled.div`
  box-sizing: border-box;
  position: relative;
  background: ${WHITE};
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  z-index: ${ZIndex.ModalContent};
  padding: 16px 0px 12px;

  @media (max-width: ${IPHONE_MAX}px) {
    border-bottom: 0.5px solid #000000;
  }
`;

export const ModalContent = styled.div`
  background: ${WHITE};
  overflow-y: scroll;
  padding: 20px;
`;

export const ModalContainer = styled.div(
  ({ isShow }: ModalContainerParams) => css`
    background: ${WHITE};
    border-radius: 9px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    width: 381px;
    min-height: 265px;
    z-index: ${ZIndex.ModalContent};
    overflow: hidden;
    ${!isShow
      ? css`
          animation: ${ModalDuration.Apply}ms ${hideModal} forwards;
        `
      : css`
          animation: ${ModalDuration.Apply}ms ${showModal};
        `};

    @media (max-width: ${IPHONE_MAX}px) {
      width: 100%;
      min-height: 100vh;
    }
  `,
);

const showModal = keyframes`
  0% {
    transform: translate(-50%, 20%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const hideModal = keyframes`
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 20%);
    opacity: 0;
  }
`;
