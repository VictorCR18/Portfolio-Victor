import { useState, createContext, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

const MyContext = createContext({});

export function TranslateContext(props: PropsWithChildren) {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "pt" ? "en" : "pt";
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
