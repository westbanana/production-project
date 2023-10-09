import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('about')
  console.log(1111111111111111, t("Про сайт"));
  return (
    <div>
      {t('Про сайт')}
    </div>
  );
};

export default AboutPage;