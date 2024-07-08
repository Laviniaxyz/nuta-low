import React from 'react';
import './App.css';
import Homepage from './screens/Homepage';
import SiteLanguageProvider from './providers/siteLanguage';
import WindowSizeProvider from './providers/windowSize';

function App() {
  return (
    <SiteLanguageProvider>
      <WindowSizeProvider>
        <Homepage />
      </WindowSizeProvider>
    </SiteLanguageProvider>
  );
}

export default App;
