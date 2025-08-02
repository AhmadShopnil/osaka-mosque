'use client';
import { useEffect, useState, useRef } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { ChevronDown } from 'lucide-react';

const COOKIE_NAME = 'googtrans';

const LanguageSwitcher = ({ color = 'white' }) => {
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [languageConfig, setLanguageConfig] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (lang) => {
    setCookie(null, COOKIE_NAME, '/auto/' + lang);
    window.location.reload();
  };

  if (!currentLanguage || !languageConfig) return null;

  const selectedLang = languageConfig.languages.find((l) => l.name === currentLanguage);

  return (
    <div className="relative inline-block text-left notranslate mt-1.5 ml-4" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={`flex items-center gap-2 px-3 py-1 border rounded-md text-sm text-${color} bg-transparent border-gray-300 hover:border-gray-400`}
      >
        {selectedLang?.title || 'Language'}
        <ChevronDown className="w-4 h-4" />
      </button>

      {dropdownOpen && (
        <ul className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md">
          {languageConfig.languages.map((ld) => (
            <li
              key={ld.name}
              onClick={() => switchLanguage(ld.name)}
              className={`px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-100 ${
                currentLanguage === ld.name ? 'font-semibold bg-gray-50' : ''
              }`}
            >
              {ld.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
