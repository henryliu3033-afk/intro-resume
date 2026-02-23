import { Link } from "react-router-dom";
import { useLang } from "./i18n/langContext";
import HeroImage from "../assets/img_9333.jpg";
function HomePage() {
  const { t } = useLang();

  return (
    <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left - Text */}
    <div>
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
        Frontend Engineer
      </p>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        {t("hero.title")}
      </h1>
      <p className="text-xl text-gray-700 mb-6">{t("hero.subtitle")}</p>
      <p className="max-w-xl text-gray-600 mb-8 leading-relaxed">{t("hero.description")}</p>
      <p className="text-sm text-gray-500 mb-10">{t("hero.lang")}</p>
      <div className="flex gap-6">
        <Link to="/projects" className="text-black font-medium underline underline-offset-4 hover:text-gray-600 transition">
          {t("projects.title")}
        </Link>
        <a href="https://github.com/henryliu3033-afk" target="_blank" className="text-gray-500 hover:text-black transition">
          GitHub →
        </a>
      </div>
    </div>

    {/* Right - Photo */}
    {/* Right - Photo */}
<div className="flex justify-center md:justify-end">
  <img
    src={HeroImage}
    alt="Henry Liu"
    className="w-90 md:w-full max-w-sm md:max-w-md rounded-2xl object-cover grayscale hover:grayscale-0 transition"
  />
</div>

  </div>
</section>
  );
}

export default HomePage;
