import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/ui/Select';
import { Currency } from 'entities/Currency';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

export const CurrencySelect = memo(({
    className,
    value,
    onChange,
    readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();
    const options = [
        { value: Currency.EUR, content: Currency.EUR },
        { value: Currency.UAH, content: Currency.UAH },
        { value: Currency.USD, content: Currency.USD },
    ];

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [])}
            label={t('Вкажіть валюту')}
            value={value}
            options={options}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
