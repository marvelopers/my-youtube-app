import React, { useState, useCallback, useEffect } from 'react';
import { ModalType, ModalParams } from 'src/constants/modal';
import { TOAST_BACKGROUND_RGB } from 'src/styles/colors';
import { ModalEventHandler, ModalHandler } from 'src/utils/ModalHandler';
import ApplyModal from 'src/components/modals/ApplyModal';
import Toast from 'src/components/modals/Toast';

export const ModalController = () => {
  const [openedModals, setOpenedModals] = useState<ModalType[]>([]);
  const [modalParams, setModalParams] = useState<ModalParams>({});

  const isOpened = useCallback((type: ModalType) => openedModals.includes(type), [openedModals]);

  const handleEvent: ModalEventHandler = useCallback((isShow, type, params) => {
    if (isShow) {
      setOpenedModals((prev) => [...prev, type]);
      setModalParams((prev) => ({
        ...prev,
        [type]: params,
      }));
    } else {
      setOpenedModals((prev) => prev.filter((modalType) => modalType !== type));
    }
  }, []);

  const handleClearParams = useCallback(() => {
    if (openedModals.length > 0) {
      setModalParams((prev) =>
        openedModals.reduce(
          (acc, type) => ({
            ...acc,
            [type]: { ...prev[type] },
          }),
          {},
        ),
      );
    } else {
      setModalParams({});
    }
  }, [openedModals]);

  useEffect(() => {
    ModalHandler.addModalEvent(handleEvent);
  }, [handleEvent]);

  return (
    <>
      <Toast
        backgroundColor={TOAST_BACKGROUND_RGB}
        isModalOpen={isOpened(ModalType.Toast)}
        modalParams={modalParams[ModalType.Toast]}
        clearModalParams={handleClearParams}
      />
      <ApplyModal
        isModalOpen={isOpened(ModalType.Apply)}
        modalParams={modalParams[ModalType.Apply]}
        clearModalParams={handleClearParams}
      />
    </>
  );
};
