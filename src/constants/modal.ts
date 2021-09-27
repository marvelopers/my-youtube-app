export enum ModalType {
  Apply = 'apply',
  Toast = 'toast',
}

export const ModalDuration = {
  Apply: 200,
  Toast: 200,
};
export interface ToastParams {
  ToastMessage: string;
}
export interface ApplyModalParams {
  title: string;
  contents: React.ReactNode;
  buttonText: string;
  onClose?: () => void;
  onApply?: () => void;
}

export type ModalParams = {
  [ModalType.Apply]?: ApplyModalParams;
  [ModalType.Toast]?: ToastParams;
};
