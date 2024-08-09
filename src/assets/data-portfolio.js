import IMG1 from "../assets/IMG_Code_React_App.png";
import IMG2 from "../assets/IMG_Code_Svelte_App.png";
import IMG3 from "../assets/IMG_Code_PostgreSQL_App.png";

export const data = [
    {
        id: 1,
        title: "BE NC News",
        img_src: IMG3,
        img_alt: "PostgreSQL logo in front of programming syntax on monitor",
        type: "BACKEND",
        techList: ["PostgreSQL", "Express", "Node", "Jest"],
        description: "This is the backend part of the news-like app. Test-driven development was used to create a custom API for use by the frontend NC news project.",
        link_Github: 'https://github.com/EmoryBrock-Portfolio/BE-NC-News',
        link_Demo: "" 
    },
    {
        id: 2,
        title: "FE NC News",
        img_src: IMG1,
        img_alt: "React's logo in front of programming syntax on monitor",
        type: "FRONTEND",
        techList: ["React", "Javascript", "Axios"],
        description: "The frontend part of the news-like app. User can view, like and leave comments on articles.",
        link_Github: '',
        link_Demo: "" 
    },
    {
        id: 3,
        title: "PlayPal",
        img_src: IMG2,
        img_alt: "Svelte's stylized S logo in front of programming syntax on monitor",
        type: "FULLSTACK",
        techList: ["Svelte", "Firebase", "Axios", "MomentJS", "TalkJS", "External API"],
        description: "The app is a video game review and social app where users can rate video games and connect with other app users via a messaging and calendar features. The app was created in a team using pair-programming working in a short time frame to deliver an MVP product.",
        link_Github: "https://github.com/EmoryBrock-Portfolio/PlayPal-FrontEnd",
        link_Demo:""
    },
    {
        id: 4,
        title: "ArtiQuest",
        img_src: IMG1,
        img_alt: "React's logo in front of programming syntax on monitor",
        type: "FRONTEND",
        techList: ["React", "Firebase", "TailwindCSS", "External APIs"],
        description: "The frontend part of the news-like app. User can view, like and leave comments on articles.",
        link_Github: 'https://github.com/EmoryBrock/ArtExhibitCurator.git',
        link_Demo: 'https://artiquest.netlify.app', 
    },
]