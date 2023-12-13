import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [])}>
        <Suspense fallback={<PageLoader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
