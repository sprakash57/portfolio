import React from 'react';
import Layout from '../components/layout';
import styles from './about.module.scss';
import { workDone, github } from '../libs/dataLib';
import Pop from '../components/pop';

const About = () => {
    return (
        <Layout title='About'>
            <div className="container mt-4">
                <div className="row hr-line">
                    <div className="col">
                        <h3>Portfolio</h3>
                    </div>
                </div>
                <div className="row mt-2 pb-3 hr-line">
                    <div className="col-sm-4 col-md-3">
                        <ul className={styles.ques}>
                            <li>Programming Languages </li>
                            <li>Frameworks and Libraries </li>
                            <li>Database and Servers </li>
                            <li>Platform and Tools </li>
                        </ul>
                    </div>
                    <div className="col-sm-8 col-md-9">
                        <ul className={styles.ans}>
                            <li><span>JavaScript</span>, TypeScript, HTML, SQL, GraphQL</li>
                            <li>Redux-Saga, Express, Bootstrap, React.js, React Native, <Pop text='Gatsby.js,' /> AG-grid, Sass</li>
                            <li>MongoDB, <span>Node.js</span>, GraphQL-Yoga, NGINX</li>
                            <li><span>AWS Lambda</span>, SES, API Gateway, Android, git, VS Code</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <h3>Showcase</h3>
                    </div>
                </div>
                <header className='mb-2'>Some of my personal work and <Pop text='open source' /> contributions.
                For more, visit my <a href={github} target="_blank" rel="noopener noreferrer">github</a> page</header>
                <section>
                    <div className={styles.customScroll}>
                        {workDone.map(work => (
                            <article key={work.id}>
                                <h5><a href={work.url} target="_blank" rel="noopener noreferrer">{work.title}</a></h5>
                                <small className='text-muted'>{work.stack}</small>
                                <p className='text-justify mt-1'>{work.body}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default About;