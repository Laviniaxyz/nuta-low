import React, { useEffect, useMemo, useState } from 'react';
import { SiteLanguageContext } from './context';

const SiteLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [siteLanguage, setSiteLanguage] = useState<'ro' | 'engl'>('ro');

  let isRo = siteLanguage === 'ro';

  useEffect(() => {
    isRo = siteLanguage === 'ro';
  }, [siteLanguage]);

  const value = useMemo(
    () => ({
      siteLanguage,
      setSiteLanguage,
      isRo,
    }),
    [siteLanguage],
  );

  return <SiteLanguageContext.Provider value={value}>{children}</SiteLanguageContext.Provider>;
};

export default SiteLanguageProvider;
