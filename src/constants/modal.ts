export enum ModalType {
  Apply = 'apply',
}

export const ModalDuration = {
  Apply: 200,
};

export interface ApplyModalParams {
  title: string;
  contents: React.ReactNode;
  buttonText: string;
  onClose?: () => void;
  onApply?: () => void;
}

export type ModalParams = {
  [ModalType.Apply]?: ApplyModalParams;
};
