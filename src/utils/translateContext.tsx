import React, { useState, createContext } from "react";
import { useTranslation } from "react-i18next";

const MyContext = createContext({});

export function TranslateContext(props: React.PropsWithChildren) {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <MyContext.Provider value={{ t, handleChangeLanguage }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyContext;
