const TEST_DOME = 'https://app.testdome.com/cert/33e254d168fe4d9a961f42d9fa150a0f';
const SHORTIFY = 'https://github.com/sprakash57/shortify';
const CUTSHROT = "https://cutshort.io/certificate/37695";
const DEV = "https://dev.to/sprakash57";
const INFOSYS = "https://www.infosys.com";
const VSKILLS = "https://drive.google.com/file/d/1ZqhSgwEa_M28OF8RO35FQqxjBTLd-fpE/view?usp=drivesdk";
const ADDEATREP = "https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat";
const CRS = "https://sprakash57.github.io/create-react-saga";
const COLLEGE = "https://www.bitmesra.ac.in/";
const LINKEDIN = "https://www.linkedin.com/in/sunny-prakash-3780ba49/";
const STORY = "https://stackoverflow.com/story/suprak";

export const skills: Skill[] = [
    {
        area: "Fabulous Frontend",
        learning: 9,
        techStack: ["React", "TypeScript", "JavaScript", "ES6+", "Redux", "React Native", "SCSS", "HTML", "Webpack", "Vue", "Highcharts", "GraphQL", "Storybook"]
    },
    {
        area: "Blazzing Backend",
        learning: 4,
        techStack: ["Node.js", "AWS", "Express", "PostgreSQL", "Cube.js", "Python", "MongoDB", "Docker", "Ubuntu"]
    }
]

export const milestones = [
    {
        year: "2021",
        achievements: [
            "Gained 500 reputaion points on Stackoverflow.",
            "Ranked in top 10% for HTML/CSS, JavaScript and React coding chanllenge on TestDome.",
            "Certification in Vue.js from Cutshort.io after successfull evaluation of gitHub repo Shortify.",
        ]
    },
    {
        year: "2020",
        achievements: [
            "Released first npm library i.e. Create React Saga. It has been downloaded over 1.4k+ times and counting.",
            "Wrote my first blog and published it to my own webiste and over Dev.to",
            "Received Insta Award from Infosys limited for performing extra-ordinary in Q1 2020."
        ]
    },
    {
        year: "2019",
        achievements: [
            "Received Insta Award from Infosys limited for performing extra-ordinary in Q4 2019.",
            "Certified as Android Apps Developer from Vskills"
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
<a href=${CRS} target="_blank" rel="noopener noreferrer">Create React Saga</a> and
<a href=${ADDEATREP} target="_blank" rel="noopener noreferrer">Add Eat Repeat</a>.
I contribute to open source projects on GitHub.
</p>
<p>
I born and brought up in India, completed my Bachelor of Engineering in 2014 from <a href=${COLLEGE} rel="noopener noreferrer" target="_blank">
Birla Institute of Technology</a>. Being a food lover, I find myself travelling and tasting delicacies in my locality. That tells why I am a Google 6-star local guide 🤩.
</p>
<p>
Not enough?! find my career profile on <a href=${LINKEDIN} rel="noopener noferrer" target="_blank">LinkedIn</a> or
see my Developer story on <a href=${STORY} rel="noopener noferrer" target="_blank">Stackoverflow</a>
</p>
`