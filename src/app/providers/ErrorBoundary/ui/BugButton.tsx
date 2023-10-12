import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState<boolean>(false);

    const onThrow = () => { setError(true); };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('Зробити помилку')}
        </Button>
    );
};
