'use client';

import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById('google-translate-script')) return;

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          'google_translate_element'
        );
      };
    };

    const applyCustomStyles = () => {
      const iframe = document.querySelector('iframe.goog-te-menu-frame');
      if (!iframe) return;

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) return;

      const menuItems = iframeDoc.querySelectorAll('.goog-te-menu2-item div, .goog-te-menu2 *');
      menuItems.forEach((el) => {
        el.style.color = '#333';
        el.style.fontFamily = 'Arial, sans-serif';
        el.style.padding = '12px';
        el.style.width = '100%';
      });

      iframeDoc.querySelectorAll('.goog-te-menu2-item div').forEach((div) => {
        div.addEventListener('mouseenter', () => {
          div.style.backgroundColor = '#0ea5e9'; // blue
          const span = div.querySelector('span.text');
          if (span) span.style.color = '#fff';
        });

        div.addEventListener('mouseleave', () => {
          div.style.backgroundColor = '#fff';
          const span = div.querySelector('span.text');
          if (span) span.style.color = '#333';
        });
      });

      iframe.style.border = 'none';
      iframe.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
    };

    addGoogleTranslateScript();

    const interval = setInterval(() => {
      const iframe = document.querySelector('iframe.goog-te-menu-frame');
      if (iframe) {
        clearInterval(interval);
        applyCustomStyles();
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-2 text-sm">
      <div id="google_translate_element" />
    </div>
  );
};

export default GoogleTranslate;
