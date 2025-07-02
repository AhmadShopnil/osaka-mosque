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
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div className="my-4">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
