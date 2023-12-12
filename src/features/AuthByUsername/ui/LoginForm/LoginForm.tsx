import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string

}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, errorMessage, isLoading,
    } = useSelector(getLoginState);

    const changeUserName = useCallback((val:string) => {
        dispatch(loginActions.setUserName(val));
    }, [dispatch]);

    const changePassword = useCallback((val:string) => {
        dispatch(loginActions.setPassword(val));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            <Text title={t('Форма авторизації')} />
            {errorMessage && (
                <Text text={t('Невірний логін або пароль')} theme={TextTheme.ERROR} />
            )}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введіть username')}
                autoFocus
                onChange={changeUserName}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введіть пароль')}
                onChange={changePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.LoginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Увійти')}
            </Button>
        </div>
    );
});
