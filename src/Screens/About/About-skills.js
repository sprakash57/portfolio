import React from 'react';

const skills = [
    {
        "title": "Programming, Query and Markup languages:",
        "value": "JavaScript, ES6, SQL, GraphQL, HTML5, SCSS"
    },
    {
        "title": "Web frameworks and libraries:",
        "value": "React.js, Redux-saga, Node.js, Express, React Native, Bootstrap"
    },
    {
        "title": "Databases and server:",
        "value": "MySQL, MongoDB, ApsaraDB, NGINX"
    },
    {
        "title": "Platforms and tools:",
        "value": "Linux, Android, git, Alibaba Cloud, VS Code"
    },
]

const AboutSkills = () => (
    <React.Fragment>
        <h3 className="intro">&nbsp;Skillset</h3>
        {skills.map((tag, index) => (
            <>
                <h5 className="textColor">{tag.title}</h5>
                <ul className="textColor">
                    <li>{tag.value}</li>
                </ul>
            </>
        ))}
    </React.Fragment>

);

export default AboutSkills;