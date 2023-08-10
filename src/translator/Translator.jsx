import React, { useEffect } from "react";

const Translator = () => {
  useEffect(() => {
    // Comprobar si el script de Google Translate ya se ha cargado
    if (
      !document.querySelector(
        'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
      )
    ) {
      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.type = "text/javascript";
      googleTranslateScript.async = true;
      googleTranslateScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      (
        document.getElementsByTagName("head")[0] || document.documentElement
      ).appendChild(googleTranslateScript);
    }

    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        { pageLanguage: "es" },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element" className="translate"></div>;
};

export default Translator;
