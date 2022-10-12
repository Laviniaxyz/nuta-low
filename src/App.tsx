import React from 'react';
import './App.css';
import Homepage from './screens/Homepage';
import SiteLanguageProvider from './providers/siteLanguage';

function App() {
  return (
    <SiteLanguageProvider>
      <Homepage />
    </SiteLanguageProvider>
  );
}

export default App;
