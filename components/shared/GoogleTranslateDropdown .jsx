'use client';
import { useEffect, useState } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ja', label: '日本語' },
  { code: 'zh-CN', label: '中文' },
];

const GoogleTranslateDropdown = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };
  }, []);

  const triggerTranslation = (langCode) => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.goog-te-menu-frame');
    if (!iframe) return;

    const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
    const langLinks = innerDoc?.querySelectorAll('a');

    langLinks?.forEach((link) => {
      const text = link.textContent?.trim().toLowerCase();
      const normalizedTarget = getLangName(langCode).toLowerCase();

      if (text?.includes(normalizedTarget)) {
        (link ).click();
      }
    });
  };

  const getLangName = (code) => {
    switch (code) {
      case 'bn':
        return 'bengali';
      case 'hi':
        return 'hindi';
      case 'ja':
        return 'japanese';
      case 'zh-CN':
        return 'chinese (simplified)';
      default:
        return 'english';
    }
  };

  const handleLangChange = (langCode) => {
    setCurrentLang(langCode);
    triggerTranslation(langCode);
    setShowDropdown(false);
  };

  return (
    <div className="relative inline-block text-sm text-white z-[999]">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="px-3 py-1 bg-[#80b918] hover:bg-[#00401A] rounded text-white transition duration-300"
      >
        🌐 {languages.find((l) => l.code === currentLang)?.label}
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 bg-white text-black rounded shadow z-[999] min-w-[120px]">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}

      {/* Keep this hidden element for Google Translate */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default GoogleTranslateDropdown;
