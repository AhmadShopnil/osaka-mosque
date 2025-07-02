'use client';
import { useEffect, useState } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'bn', label: 'বাংলা' },
];



const GoogleTranslateDropdown = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Init Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };
  }, []);

  const handleLangChange = (langCode) => {
    setCurrentLang(langCode);

    const iframe = document.querySelector('iframe.goog-te-menu-frame') ;
    if (!iframe) return;

    const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
    const langLinks = innerDoc?.querySelectorAll('a');

    langLinks?.forEach((link) => {
      const text = link.textContent?.trim().toLowerCase();
      if (langCode === 'bn' && text?.includes('bengali')) {
        (link ).click();
      } else if (langCode === 'en' && text?.includes('english')) {
        (link ).click();
      }
    });

    setShowDropdown(false);
  };

  return (
    <div className="relative inline-block text-sm text-white">
      {/* Toggle button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="px-3 py-1 bg-[#80b918] hover:bg-[#00401A] text-white rounded transition duration-300"
      >
        🌐 {languages.find((l) => l.code === currentLang)?.label}
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg z-[100] min-w-[120px]">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}

      {/* Google Translate hidden element (required) */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default GoogleTranslateDropdown;
