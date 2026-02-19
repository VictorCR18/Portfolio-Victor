import { useState, createContext, PropsWithChildren, useEffect } from "react";
import { useTranslation } from "react-i18next";

const MyContext = createContext({});

export function TranslateContext(props: PropsWithChildren) {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("portfolio_lang") || language || "en";
  });

  useEffect(() => {
    changeLanguage(currentLanguage);
  }, [currentLanguage, changeLanguage]);

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value.toLowerCase();

    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    localStorage.setItem("portfolio_lang", newLanguage);
  };

  return (
    <MyContext.Provider value={{ t, handleChangeLanguage, currentLanguage }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyContext;
