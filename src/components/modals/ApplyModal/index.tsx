import React, { useCallback } from 'react';
import { ModalHandler } from 'src/utils/ModalHandler';
import { ApplyModalParams, ModalType, ModalDuration } from 'src/constants/modal';
import { ModalWrapper } from 'src/components/modals/ModalWrapper';
import CloseIcon from 'src/components/icons/CloseIcon';
import * as Styles from './styles';

interface FilterModalProps {
  isModalOpen: boolean;
  modalParams?: ApplyModalParams;
  clearModalParams: () => void;
}

const FilterModal = ({ isModalOpen, modalParams, clearModalParams }: FilterModalProps) => {
  const clearModal = useCallback(() => {
    ModalHandler.hide(ModalType.Apply);
  }, []);

  const handleClose = useCallback(() => {
    clearModal();
    modalParams?.onClose?.();
  }, [clearModal, modalParams]);

  const handleClickApply = useCallback(() => {
    clearModal();
    modalParams?.onApply?.();
  }, [clearModal, modalParams]);

  return (
    <ModalWrapper isModalOpen={isModalOpen} duration={ModalDuration.Apply} clearModalParam={clearModalParams}>
      <Styles.ModalContainer isShow={isModalOpen}>
        <Styles.ModalHead>
          <Styles.Title>{modalParams?.title}</Styles.Title>
          <Styles.CloseButton onClick={handleClose}>
            <CloseIcon />
          </Styles.CloseButton>
        </Styles.ModalHead>
        <Styles.ModalContent>{modalParams?.contents}</Styles.ModalContent>
        <Styles.ButtonWrapper>
          <Styles.ApplyButton onClick={handleClickApply}>{modalParams?.buttonText}</Styles.ApplyButton>
        </Styles.ButtonWrapper>
      </Styles.ModalContainer>
    </ModalWrapper>
  );
};

export default FilterModal;
