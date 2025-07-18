'use client';

import { useEffect, useRef } from 'react';

export default function GoogleTranslateCustom() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load Google Translate script
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

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) return;

      iframe.style.boxShadow =
        '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3)';
      iframe.style.height = '100%';
      iframe.style.width = '100%';
      iframe.style.top = '0px';
    };

    const interval = setInterval(() => {
      const iframe = document.querySelector('iframe.goog-te-menu-frame');
      if (iframe) {
        applyCustomStyles();
        clearInterval(interval);
      }
    }, 500);

    // 👉 Close language list on outside click
    const handleClickOutside = (event) => {
      const iframe = document.querySelector('iframe.goog-te-menu-frame');
      if (!iframe) return;

      const buttonContainer = containerRef.current;
      const target = event.target;

      const clickedInsideWidget =
        buttonContainer?.contains(target) ||
        iframe.contains(target) ||
        iframe === target;

      if (!clickedInsideWidget) {
        iframe.style.display = 'none'; // manually hide dropdown
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener('click', handleClickOutside);
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
