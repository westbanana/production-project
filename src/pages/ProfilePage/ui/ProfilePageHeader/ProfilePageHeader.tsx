import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string

}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [])}>
            <Text title={t('Профіль')} />
            {readonly
                ? (
                    <Button
                        className={cls.ediBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Редагувати')}
                    </Button>
                )
                : (
                    <>

                        <Button
                            className={cls.ediBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Скасувати')}
                        </Button>
                        <Button
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Зберегти')}
                        </Button>
                    </>
                )}
        </div>
    );
};
