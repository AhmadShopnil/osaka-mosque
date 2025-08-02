'use client';
import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

const COOKIE_NAME = 'googtrans';

const LanguageSwitcher = ({color="white"}) => {
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [languageConfig, setLanguageConfig] = useState(null);

  // Initialize translation engine
  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split('/');
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    if (languageValue) {
      setCurrentLanguage(languageValue);
    }

    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  const switchLanguage = (lang) => {
    setCookie(null, COOKIE_NAME, '/auto/' + lang);
    window.location.reload();
  };

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  return (
    <div className="notranslate mt-1.5 ml-4">
      <select
        className={`px-3 py-1 border rounded-md text-sm text-${color}`}
        value={currentLanguage}
        onChange={(e) => switchLanguage(e.target.value)}
      >
        {languageConfig.languages.map((ld) => (
          <option key={ld.name} value={ld.name} className='text-gray-800'>
            {ld.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
