

export const TEXTS = {
    zh: {
        nav: {
            home: "首頁",
            about: "關於我",
            contact: "聯繫方式",
            projects: "項目",
            skills: "技術棧"
        },

        hero: {
            title: "我是劉和志,也可以叫我Henry,Live Young Forever,樂觀向上是我的主軸",
            subtitle: "擅長使用React,Tailwind CSS,api串接,也是抖音內容創作者,有11萬粉絲的創作者背景",
            description: "我有在持續練習以真實產品為導向的前端開發,包含分類系統,購物車,狀態管理與頁面路由,重視組件拆分與代碼可讀性",
            lang: "精通英文,日文略懂"
        },
        projects: {
            title: "項目",
            mainproject: "使用React打造的電商網站,包含商品分類,搜索與購物車流程",
        },
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            contact: "Contact",
            projects: "Projects",
            skills: "Skills",
        },
        hero: {
            title: "HI,my name is Henry ,31 years old ,but always live young ,im a optimist",
            subtitle: "good at using React,Tailwind CSS,API,modern UI,12 years of stage experience, 110K followers creator background",
            description: "I'm currently practicing product-oriented front-end development, including category systems,shopping carts,state management and page routing, component decomposition,and decision-making code.",
            lang: "Language wise,English is all good and also some Japanese(cuz i watch too much animate so i went to language school)",
            projects: "view projects",
        },
        projects: {
            title: "Projects",
            mainProjectDesc:
                "A shopping website built with React, featuring category browsing, search and cart flow.",
        }
    },

}


export const PROJECTS = [
    {
        id: "shop",
        featured: true,
        title: {
            zh: "電商購物網站",
            en: "E-commerce Shopping Website"

        },
        description: {
            zh: "一個完整的前端電商項目 包含分類 購物車與狀態管理",
            en: "A complete frontend e-commerce project with category routing and cart"
        },
        tech: ["React", "React Router Dom", "Context API", "Twailwind CSS"],
        highlight: {
            zh: [
                "自定義分類與二級路由設計",
                "購物車使用useReducer統一管理",
                "支持中英文切換(i18n)",],
            en: [
                "custom category &nested routing",
                "centralized cart state with useRudcer",
                "Built-in i18n language toggle",
            ]
        },
        links: {
            demo: "https://shopping-websites-ten.vercel.app/",
            github: "https://github.com/henryliu3033-afk"
        },

    }
]

export const OTHER_PROJECT_LINK = {
    zh: "其他作品請看這裡",
    en: "Check my other projects here",
    url: "https://resume-profolio-nu.vercel.app/"
}
export const SKILLS = {
    frontend: {
        title: { zh: "前端核心", en: "Frontend Core" },
        items: ["HTML", "CSS", "JAVASCRIPT(ES6)",],
    },
    react: {
        title: { zh: "React 技術棧", en: "React Ecosystem " },
        items: ["React", "React router dom", "Context API", "useReducer", "Hooks"],
    },
    sytling: {
        title: { zh: "樣式與UI", en: "Styling & UI" },
        items: ["Tailwind CSS", "Component Design"],
    },
    tools: {
        title: { zh: "工具與流程", en: "Tools & Workflow" },
        items: [
            "Git/Github",
            "vite",
            "REST API Intergration"
        ]
    }
}

export const ABOUT = {
    selfitro: {
        zh: "樂觀向上,認真學習，保持學習狀態",
        en: "always be optimist,stay focus, stay learning"
    },
    section1: {
        zh: "我是一名前端開發者 目前專注於React與現代開發 在進入前端領域之前，有超過12年的DJ與舞台演出經驗，曾參與國際藝人的巡演相關活動，儘管長期從事音樂與演出 我始終對coding 保有高度興趣",
        en: "I'm a frontend developer focusing on React and modern web development Before transitioning into frontend engineering, I spent over 12 years as a professional DJ and performer.Despite my background in music, I have always been deeply interested in coding and technology"
    },
    section2: {
        zh: "儘管長期從事與演出工作,我始終對coding與技術保持高度興趣,在2023年年底回到台灣后,決定正式投入前端開發的學習,並於2025年6月開始系統性自學前端",
        en: "After returning to Taiwan in late 2023, I decided to fully commit to frontend development and began structured self-study in June 2025.",
    },
    section3: {
        zh: "目前已熟悉 HTML、CSS、JavaScript 与 React，並持續練習將真實產品需要轉化為可維護的前端應用,我比較重視代碼結構,使用者體驗,以及組件的可擴展性",
        en: ".I have hands-on experience with HTML, CSS, JavaScript, and React, and enjoy building maintainable, real-world applications with a strong focus on user experience and clean architecture",
    },
    section4: {
        zh: "性格方面，我樂於溝通，習慣自律學習，也享受持續挑戰新事物,過去舞台與創作經驗培養了我對節奏,流程與用戶感受的敏銳度,這些能力也在慢慢轉化為我在前端開發的能力",
        en: "I'm an outgoing and self-disciplined learner who enjoys communication and continuous growth.My experience in live performance and content creation has shaped my sensitivity to rhythm, flow, and user interaction — skills I now apply to frontend development",
    }
}

