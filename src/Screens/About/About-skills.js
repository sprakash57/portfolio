import React from 'react';

const skills = [
    {
        "title":"Languages: ",
        "value": "Java, JavaScript(ES5 & ES6)"
    },
    {
        "title":"Frameworks: ",
        "value": "Spring, JPA/Hibernate, Bootstrap, Android"
    },
    {
        "title":"Web Technologies: ",
        "value": "React.js, Redux.js, CSS3, HTML5, LESS, GraphQL, JSP"
    },
    {
        "title":"Databases and Server: ",
        "value": "MySQL, Apache Tomcat"
    },
    {
        "title":"Miscellanious: ",
        "value": "git, Jira, Android Studio, VS Code, Eclipse, You track, Maven"
    },
]

const AboutSkills = () => (
    <React.Fragment>
        <h3 className="intro">&nbsp;Skillset</h3>
        <ul className="textColor">
            {skills.map((item, index) => <li key={index}><strong>{item.title}</strong>{item.value}</li>)}
        </ul>
    </React.Fragment>

);

export default AboutSkills;