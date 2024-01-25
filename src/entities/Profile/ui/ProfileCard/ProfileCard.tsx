import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileErrore/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string

}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const erorr = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    return (
        <div className={classNames(cls.ProfileCard, {}, [])}>
            <div className={cls.header}>
                <Text title={t('Профіль')} />
                <Button
                    className={cls.ediBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редагувати')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t("Ваше ім'я")}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамілія')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
