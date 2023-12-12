import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (userAuthData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={cls.links}
                    onClick={onLogOut}
                >
                    {t('Вийти')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Увійти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
