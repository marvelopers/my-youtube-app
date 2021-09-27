import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { ModalDuration } from 'src/constants/modal';
import { GREY_1, WHITE } from 'src/styles/colors';
import { ZIndex } from 'src/styles/zIndex';
import { IPHONE_MAX } from 'src/styles/layout';

interface ModalContainerParams {
  isShow: boolean;
}

export const ModalContent = styled.div`
  background: ${GREY_1};
  color: ${WHITE};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  padding: 18px 30px;
  border-radius: 9px;
  min-width: 220px;
  @media (max-width: ${IPHONE_MAX}px) {
    min-width: 92vw;
  }
`;

export const ModalContainer = styled.div(
  ({ isShow }: ModalContainerParams) => css`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    z-index: ${ZIndex.ToastContent};
    overflow: hidden;
    ${!isShow
      ? css`
          animation: ${ModalDuration.Toast}ms ${hideModal} forwards;
        `
      : css`
          animation: ${ModalDuration.Toast}ms ${showModal};
        `};
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
