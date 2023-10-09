import {classNames} from "shared/lib/classNames";
import cls from "./LanguageSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    console.log(className)
    const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua')
        .then(null)
    }

  return (
    <Button
      className={classNames(cls.LanguageSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Мова')}
    </Button>
  );
};