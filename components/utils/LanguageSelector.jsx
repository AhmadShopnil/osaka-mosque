'use client';

import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh-CN', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export default function LanguageSelector() {
  useEffect(() => {
    // Set default language
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo") ;
      if (select) {
        select.style.display = "none"; // hide native Google dropdown
        clearInterval(interval);
      }
    }, 1000);
  }, []);

  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="relative inline-block">
      <div className="mb-2 hidden" id="google_translate_element" />

      <div className="group inline-flex flex-col">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700">
          🌐 Language <ChevronDown size={16} />
        </button>
        <div className="absolute top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md z-50 min-w-[180px]">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
