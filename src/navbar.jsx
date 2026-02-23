import { Link } from "react-router-dom";
import { useLang } from "./pages/i18n/langContext";

function NavBar() {
  const { lang, toggleLang, t } = useLang();
  return (
    <>
      <nav className="sticky top-0 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">
            {t("nav.home")}
          </Link>

          <div className="flex gap-3 md:gap-10 text-sm md:text-xl">
            <Link to="/about" className="hover:underline">{t("nav.about")}</Link>
            <Link to="/projects" className="hover:underline">
              {t("nav.projects")}
            </Link>
            <Link to="/contacts" className="hover:underline">
              {t("nav.contact")}
            </Link>
            <Link to="/skills" className="hover:underline">
              {t("nav.skills")}
            </Link>
          </div>
          <button
            onClick={toggleLang}
            className="text-sm border px-3 py-1 rounded hover:cursor-pointer"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
