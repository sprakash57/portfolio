import { inlineLink } from "@/helpers/utils";

const TEST_DOME = 'https://app.testdome.com/cert/33e254d168fe4d9a961f42d9fa150a0f';
const CUTSHROT = "https://cutshort.io/certificate/37695";
const DEV = "https://dev.to/sprakash57";
const INFOSYS = "https://www.infosys.com";
const VSKILLS = "https://drive.google.com/file/d/1ZqhSgwEa_M28OF8RO35FQqxjBTLd-fpE/view?usp=drivesdk";
const ADDEATREP = "https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat";
const CRS = "https://sprakash57.github.io/create-react-saga";
const COLLEGE = "https://www.bitmesra.ac.in/";
const LINKEDIN = "https://www.linkedin.com/in/sunny-prakash-3780ba49/";
const STORY = "https://stackoverflow.com/cv/suprak";
const DISCOGS = "http://discogspedia.netlify.app"

export const skills: Skill[] = [
    {
        area: "Frontend",
        learning: 6,
        techStack: ["TypeScript", "JavaScript(ES6+)", "React", "Redux", "Sass", "Storybook", "React Native", "Webpack", "Vue", "Highcharts", "Recoil"]
    },
    {
        area: "Backend",
        learning: 4,
        techStack: ["Node.js", "AWS", "Express", "PostgreSQL", "Cube.js", "Python", "MongoDB", "Docker", "GraphQL"]
    }
]

export const milestones = [
    {
        year: "2021",
        achievements: [
            "Received <strong>&quot;Being Inclusive Award&quot;</strong> during my tenure at Mastercard.",
            "Gained 500 reputation points on Stackoverflow.",
            `Ranked in top 10% for HTML/CSS, JavaScript and React coding challenge on ${inlineLink(TEST_DOME, "TestDome")}.`,
            `Certification in Vue.js from ${inlineLink(CUTSHROT, "Cutshort.io")} after successfull evaluation of gitHub repo Shortify.`,
        ]
    },
    {
        year: "2020",
        achievements: [
            "Released first npm library i.e. Create React Saga. It has been downloaded over 1.4k+ times and counting.",
            `Wrote my first blog and published it on my own webiste and over ${inlineLink(DEV, "Dev.to")}.`,
        ]
    },
    {
        year: "2019",
        achievements: [
            `Received <strong>&quot;Insta Award&quot;</strong> at ${inlineLink(INFOSYS, "Infosys limited")} for performing extraordinary in Q4 2019.`,
            `Certified as Android Apps Developer from ${inlineLink(VSKILLS, "Vskills")}.`
        ]
    },
    {
        year: "2018",
        achievements: [
            "Published my first Android app i.e. Connect 3 on Google Play store."
        ]
    }
]

export const aboutMe = `
<p>
Hello there! I am Sunny. I am a developer, newbie blogger and technical content creator. I mostly do web and mobile development. Few of my creations are
${inlineLink(CRS, "Create React Saga")} ${inlineLink(DISCOGS, "Discogspedia")} and android app ${inlineLink(ADDEATREP, "Add Eat Repeat")}. Time to Time 
I contribute to open source projects on GitHub.
</p>
<p>
I was born and brought up in India, completed my Bachelor of Engineering in 2014 from ${inlineLink(COLLEGE, "Birla Institute of Technology")}.
Being a food lover, I find myself travelling and trying delicacies. That tells why I am a Google 6-star local guide 🤩.
</p>
<p>
Not enough? Find my career profile on ${inlineLink(LINKEDIN, "LinkedIn")} or see my Developer story on ${inlineLink(STORY, "Stackoverflow")}.
</p>
`;

export const FOOTER_INTRO = `Great!! You have made it to the last. Liked something?! send me a mail at <span title="Click to copy">sunny.prakashgm@gmail.com</span>. Find me on telegram <span title="Click to copy">@sprakash57</span> and social platforms mentioned in the footer.`;