import React from 'react';

export interface SiteLanguageContextType {
  siteLanguage: 'ro' | 'engl';
  setSiteLanguage: React.Dispatch<React.SetStateAction<'ro' | 'engl'>>;
  isRo: boolean;
}

export const SiteLanguageContext = React.createContext<SiteLanguageContextType>({
  siteLanguage: 'ro',
  setSiteLanguage: () => undefined,
  isRo: true,
});
