import React, { useEffect } from 'react';
import { ModalHandler } from 'src/utils/ModalHandler';
import { ModalDuration, ModalType, ToastParams } from 'src/constants/modal';
import { ModalWrapper } from 'src/components/modals/ModalWrapper';
import * as Styles from './styles';

const ALERT_SHOWING_TIME = 1000;

interface InfoModalProps {
  isModalOpen: boolean;
  backgroundColor: string;
  modalParams?: ToastParams;
  clearModalParams: () => void;
}

const Toast = ({ isModalOpen, backgroundColor, modalParams, clearModalParams }: InfoModalProps) => {
  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const alertTimeOut = setTimeout(() => {
      ModalHandler.hide(ModalType.Toast);
    }, ALERT_SHOWING_TIME);
    return () => clearTimeout(alertTimeOut);
  }, [isModalOpen]);

  return (
    <ModalWrapper
      isModalOpen={isModalOpen}
      backgroundColor={backgroundColor}
      duration={ModalDuration.Toast}
      clearModalParam={clearModalParams}>
      <Styles.ModalContainer isShow={isModalOpen}>
        <Styles.ModalContent>{modalParams?.ToastMessage}</Styles.ModalContent>
      </Styles.ModalContainer>
    </ModalWrapper>
  );
};

export default Toast;
