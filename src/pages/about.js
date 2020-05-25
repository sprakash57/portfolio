import React from 'react';
import Layout from '../components/layout';
import styles from './about.module.scss';
import { workDone, github } from '../libs/dataLib';
import Pop from '../components/pop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const handleDownload = async () => {
        const response = await fetch(process.env.GATSBY_LAMBDA_DOWNLOAD, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json()).catch(err => alert('something went wrong on server side. Check back later'));
        window.open(response);
    }
    return (
        <Layout title='About'>
            <div className="container mt-4">
                <div className="row hr-line">
                    <div className="col">
                        <h3>Portfolio{' '}
                            <button onClick={handleDownload} className={styles.resume}>
                                Resume {' '}<FontAwesomeIcon icon={faCloudDownloadAlt} />
                            </button>
                        </h3>
                    </div>
                </div>
                <section className="row mt-2">
                    <article className="col-xs-12 col-sm-4">
                        <p className={styles.pHead}>Programming Languages</p>
                    </article>
                    <article className="col-xs-12 col-sm-8">
                        <p className={styles.pBody}>JavaScript, TypeScript, HTML, SQL, GraphQL</p>
                    </article>
                </section>
                <section className="row">
                    <article className="col-xs-12 col-sm-4">
                        <p className={styles.pHead}>Frameworks and Libraries</p>
                    </article>
                    <article className="col-xs-12 col-sm-8">
                        <p className={styles.pBody}>React.js, React Native, Express, Redux-Saga, Thunk, Preact, React Navigation, <Pop text='Gatsby.js,' /> AG-grid, Sass, Bootstrap</p>
                    </article>
                </section>
                <section className="row">
                    <article className="col-xs-12 col-sm-4">
                        <p className={styles.pHead}>Database and Servers</p>
                    </article>
                    <article className="col-xs-12 col-sm-8">
                        <p className={styles.pBody}>MongoDB, Node.js, GraphQL-Yoga, NGINX</p>
                    </article>
                </section>
                <section className="row">
                    <article className="col-xs-12 col-sm-4">
                        <p className={styles.pHead}>Platform and Tools</p>
                    </article>
                    <article className="col-xs-12 col-sm-8">
                        <p className={styles.pBody}>AWS Lambda, Serverless, Android, git, VS Code, Alibaba ECS, Netlify, Docker</p>
                    </article>
                </section>
                <div className="row mt-4 hr-line">
                    <div className="col">
                        <h3>Showcase</h3>
                    </div>
                </div>
                <header className='mb-2 mt-2'>Some of my personal work and <Pop text='open source' /> contributions.
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