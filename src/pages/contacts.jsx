import { useLang } from "./i18n/langContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const { lang } = useLang();
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md px-8 py-12">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-semibold mb-3">
              {lang === "zh" ? "聯繫方式" : "Contact"}
            </h1>
            <p className="text-slate-600">
              {lang === "zh"
                ? "如果你對我的專案或經歷有興趣，歡迎透過以下方式聯繫我。"
                : "If you're interested in my projects or background, feel free to reach out."}
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6 mb-10">
            {/* Email */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-xl text-slate-500"
              />
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a
                  href="mailto:henry_liu3033@gmail.com"
                  className="text-indigo-600 hover:underline"
                >
                  henry_liu3033@gmail.com
                </a>
              </div>
            </div>

            {/* Line */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faLine}
                className="text-xl text-green-500"
              />
              <div>
                <p className="text-sm text-slate-400">Line</p>
                <p className="text-slate-700">henry331237661</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faMobile}
                className="text-xl text-slate-500"
              />
              <div>
                <p className="text-sm text-slate-400">
                  {lang === "zh" ? "手機" : "Phone"}
                </p>
                <p className="text-slate-700">0981-120-728</p>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">
              {lang === "zh" ? "作品集" : "Portfolio"}
            </h3>
            <a
              href="https://resume-profolio-nu.vercel.app/"
              target="_blank"
              className="text-indigo-600 hover:underline"
            >
              resume-profolio-nu.vercel.app →
            </a>
          </div>

          {/* Location */}
          <div className="text-sm text-slate-500">
            {lang === "zh"
              ? "我住在新北市汐止區 / 可遠端"
              : "Based in Taiwan / Open to remote"}
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default Contact;
