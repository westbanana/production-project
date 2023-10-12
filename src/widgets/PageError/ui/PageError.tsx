import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string

}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Щось сталося')}</p>
            <Button
                onClick={reloadPage}
            >
                {t('Оновити сторінку')}
            </Button>
        </div>
    );
};
