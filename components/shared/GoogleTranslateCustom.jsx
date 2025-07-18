'use client';

import { useEffect } from 'react';

export default function GoogleTranslateCustom() {
  useEffect(() => {
    // Load Google Translate script dynamically
    if (!window.google || !window.google.translate) {
      const script = document.createElement('script');
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Create the callback function required by Google Translate
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

      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (!iframeDoc) return;

      const items = iframeDoc.querySelectorAll(
        '.goog-te-menu2-item div, .goog-te-menu2 *'
      );
      items.forEach((item) => {
        item.style.color = '#544F4B';
        item.style.fontFamily = 'Roboto';
        item.style.width = '100%';
      });

      const selectedItem = iframeDoc.querySelector('.goog-te-menu2-item-selected');
      if (selectedItem) selectedItem.style.display = 'none';

      const menu = iframeDoc.querySelector('.goog-te-menu2');
      if (menu) {
        menu.style.padding = '0px';
        menu.style.border = 'none';
        menu.style.height = '100%';
        menu.style.width = '100%';
      }

      iframeDoc.querySelectorAll('.goog-te-menu2-item div').forEach((div) => {
        div.style.padding = '20px';

        div.onmouseenter = () => {
          div.style.backgroundColor = '#4385F5';
          const span = div.querySelector('span.text');
          if (span) span.style.color = 'white';
        };
        div.onmouseleave = () => {
          div.style.backgroundColor = 'white';
          const span = div.querySelector('span.text');
          if (span) span.style.color = '#544F4B';
        };
      });

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
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div
        id="google_translate_element"
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}
