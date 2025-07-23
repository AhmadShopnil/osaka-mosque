'use client';

import { useEffect, useRef } from 'react';

export default function GoogleTranslateCustom() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.translate) {
      const script = document.createElement('script');
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const applyCustomStyles = () => {
      const iframe = document.querySelector('iframe.goog-te-menu-frame');
      if (!iframe) return;

      iframe.style.boxShadow =
        '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3)';
      iframe.style.top = '40px';
      iframe.style.zIndex = '9999';
    };

    const styleInterval = setInterval(() => {
      const iframe = document.querySelector('iframe.goog-te-menu-frame');
      if (iframe) {
        applyCustomStyles();
        clearInterval(styleInterval);
      }
    }, 500);

    // ✅ Click outside detection (no iframe access)
    const handleClickOutside = (event) => {
      const container = containerRef.current;
      if (container && !container.contains(event.target)) {
        const iframe = document.querySelector('iframe.goog-te-menu-frame');
        if (iframe) {
          iframe.style.display = 'none'; // force-hide the dropdown
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(styleInterval);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="google_translate_element"
      className="text-white"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    />
  );
}
