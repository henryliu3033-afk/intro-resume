import { createContext, useContext, useState } from "react";
import { TEXTS } from "./texts.JS";

const LangContext = createContext();
function LangProvider({ children }) {
  const [lang, setLang] = useState("zh");
  const toggleLang = () => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  };
  const t = (path) => {
    return path.split(".").reduce((obj, key) => obj[key], TEXTS[lang]);
  };
  return (
    <>
      <LangContext.Provider value={{ lang, toggleLang, t }}>
        {children}
      </LangContext.Provider>
    </>
  );
}

export function useLang() {
  return useContext(LangContext);
}
export default LangProvider;
