import { useLang } from "./i18n/langContext";
import { SKILLS } from "./i18n/texts";

function Skills() {
  const { lang } = useLang();

  return (
    <>
      <section className=" max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-10">
          {lang === "zh" ? "技能" : "Skills"}
        </h1>
        <div className=" grid md:grid grid-cols-2 gap-8">
          {Object.values(SKILLS).map((group) => (
            <div key={group.title.en} className=" border rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">
                {group.title[lang]}
              </h2>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm border px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
