import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import styled from '@emotion/styled';
import { visuallyHidden } from '@/styles/GlobalStyles';

interface ModalProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  description?: string;
  onClose?: () => void;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ trigger, title, children, description, open, setOpen }) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>{title}</Title>
          {children}
          <Dialog.Close asChild>
            <CloseButton aria-label="Close">
              <X size={20} />
            </CloseButton>
          </Dialog.Close>
          <Dialog.Description>
            <p css={visuallyHidden}>{description && ''}</p>
          </Dialog.Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;

const Title = styled(Dialog.Title)`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  background: white;
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 450px;
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;
