import { classNames, Mods } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Countries, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void,
  onChangeLastname?: (value?: string) => void,
  onChangeAge?: (value?: string) => void,
  onChangeCountry?: (country?: Countries) => void,
  onChangeCity?: (value?: string) => void,
  onChangeAvatar?: (value?: string) => void,
  onChangeUsername?: (value?: string) => void,
  onChangeCurrency?: (currency?: Currency) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        error,
        isLoading,
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCountry,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Сталася помилка під час завантаження профілю')}
                    theme={TextTheme.ERROR}
                    text={t('Спробуйте оновити сторінку')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods:Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt={t('Фото профілю')} />
                    </div>
                )}
                <Input
                    value={data?.firstname}
                    placeholder={t("Ваше ім'я")}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамілія')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваше вік')}
                    onChange={onChangeAge}
                    className={cls.input}
                    readonly={readonly}
                />
                <CountrySelect
                    onChange={onChangeCountry}
                    readonly={readonly}
                    value={data?.country}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваше місто')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t("Ваше ім'я користувача")}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Посилання на фото')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
