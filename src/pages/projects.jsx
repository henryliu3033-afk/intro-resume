import { useLang } from "./i18n/langContext";
import { PROJECTS, OTHER_PROJECT_LINK } from "./i18n/texts.js";

function Projects() {
  const { lang } = useLang();
  const featured = PROJECTS.find((p) => p.featured);

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p>
          {lang === "zh"
            ? "以下是我近期完成的前端項目"
            : "Here are some frontend projects I've built recently"}
        </p>
        {featured && (
          <div className="mb-20 border rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-2 ">
              {featured.title[lang]}
            </h2>
            <p className="text-gray-600 mb-2 flex-">
              {featured.description[lang]}
            </p>
            <div>
              {featured.tech.map((t) => (
                <span key={t} className="text-xs border px-2 py-1 rounded ">
                  {t}
                </span>
              ))}
            </div>
            <ul className="list-disc pl-5 text-sm text-gray-600 mb-6">
              {featured.highlight[lang].map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href={featured.links.demo}
                className="underline"
                target="_blank"
              >
                DEMO
              </a>
              <a
                href={featured.links.github}
                className="underline"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-xl p-6">
            <h3 className=" font-semibold mb-2">{OTHER_PROJECT_LINK[lang]}</h3>
            <a
              href={OTHER_PROJECT_LINK.url}
              target="_blank"
              className="underline font-medium"
            >
              Here →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
