import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { useCallback } from 'react';
import { Countries } from 'entities/Country';

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  value?: Countries
  onChange?: (country: Countries) => void
}

export const CountrySelect = ({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const options = [
        { value: Countries.USA, content: Countries.USA },
        { value: Countries.Ukraine, content: Countries.Ukraine },
        { value: Countries.Germany, content: Countries.Germany },
        { value: Countries.Poland, content: Countries.Poland },
    ];

    const onChangeHandler = useCallback((country: string) => {
        onChange?.(country as Countries);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [])}
            label={t('Ваша Країна')}
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
            options={options}
        />
    );
};
