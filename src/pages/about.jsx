import { useLang } from "./i18n/langContext";
import Image from "../assets/IMG_0504.jpg";
function About() {
  const { lang } = useLang();
  return (
    <>
      <section className=" max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">
          {lang === "zh" ? "關於我" : "About me"}
        </h1>
        <img src={Image} className="mb-6" />
        <p className="text-xl text-gray-700 mb-16">
          {lang === "zh"
            ? "我是一名前端開發者 目前專注於React與現代開發 在進入前端領域之前，有超過12年的DJ與舞台演出經驗，曾參與國際藝人的巡演相關活動，儘管長期從事音樂與演出 我始終對coding 保有高度興趣"
            : "I'm a frontend developer focusing on React and modern web development Before transitioning into frontend engineering, I spent over 12 years as a professional DJ and performer.Despite my background in music, I have always been deeply interested in coding and technology"}
        </p>
        <div className="mb-16">
          <p className="leanding-relaxed text-gray-700 mb-6">
            {lang === "zh"
              ? "儘管長期從事與演出工作,我始終對coding與技術保持高度興趣,儘管長期從事與演出工作,我始終對coding與技術保持高度興趣,在2023年年底回到台灣后,決定正式投入前端開發的學習,並於2025年6月開始系統性自學前端"
              : "After returning to Taiwan in late 2023, I decided to fully commit to frontend development and began structured self-study in June 2025."}
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4">
            {lang === "zh" ? "轉向前端開發" : "Transition to Frontend"}
          </h2>
          <p className="leading-relaxed text-gray-700">
            {lang === "zh"
              ? "目前已熟悉 HTML、CSS、JavaScript 与 React,並持續練習將真實產品需要轉化為可維護的前端應用,我比較重視代碼結構,使用者體驗,以及組件的可擴展性"
              : "I have hands-on experience with HTML, CSS, JavaScript, and React, and enjoy building maintainable, real-world applications with a strong focus on user experience and clean architecture"}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {lang === "zh" ? "工作方式與特質" : "How i work"}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              {lang === "zh"
                ? "樂於溝通,習慣團隊合作"
                : "Strong conmmunication and collaboration skills"}
            </li>
            <li>
              {lang === "zh"
                ? "自律學習,持續精進技術"
                : "Self-disciplined and continious leanrner"}
            </li>
            <li>
              {lang === "zh"
                ? "對使用者與互動體驗流程敏感"
                : "Highly sensitive to user experience and interaction flow"}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
