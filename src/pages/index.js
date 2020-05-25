import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import dp from '../images/photo.jpg';
import vsk from '../images/vcl.png';
import hack from '../images/hacktoberfest.png';
import aliba from '../images/alibaba.png';
import styles from './index.module.scss';
import blogStyle from './blog.module.scss';
import { faLinkedinIn, faGooglePlay, faGithub, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Pop from '../components/pop';
import BlogItem from "../components/blogItem";
import { BlogQuery } from "../libs/queryLib";
import { github, linkedin, playStore, gitRepo, starckoverflow, twitter, vskills, hacktoberfest, alibaba } from '../libs/dataLib';
import SocialIcon from "../components/socialIcon";
import { Link } from "gatsby";

const IndexPage = () => {

    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);

    const posts = () => BlogQuery().map(({ node }, index) => {
        if (index < 3) return <BlogItem key={index} node={node} styles={blogStyle} hideSummary={true} />
        return null;
    });

    const renderRepos = () => repos.map((repo, i) => {
        if (i < 5) return (
            <li key={i} className={blogStyle.post}>
                <section className="row">
                    <article className="col">
                        <a href={repo.svn_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </article>
                </section>
            </li>
        )
        return null;
    })

    const loadGitRepos = async () => {
        try {
            const response = await fetch(gitRepo);
            const data = await response.json();
            setRepos(data)
        } catch (error) {
            alert('Gihub repos are not available right now :(');
        }
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        loadGitRepos();
    }, [])

    return (
        <Layout title='Home'>
            <div className='container'>
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-4 text-center">
                        <img className={styles.photo} src={dp} alt="me" />
                        <div className='mt-3'>
                            <p>Web Develoer | React | JavaScript</p>
                        </div>
                        <div className={styles.social}>
                            <SocialIcon icon={faStackOverflow} to={starckoverflow} />
                            <SocialIcon icon={faTwitter} to={twitter} />
                            <SocialIcon icon={faLinkedinIn} to={linkedin} />
                            <SocialIcon icon={faGooglePlay} to={playStore} size='sm' />
                            <SocialIcon icon={faGithub} to={github} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 margin-tp">
                        <h2>Hi<Pop text="," /></h2>
                        <p className='text-justify'>Welcome to my blog page! I am Sunny Prakash, a Web Developer, and a Self-Taught Android Apps Developer living in Pune, India. I
                        have been programming for over a half-decade. I have started developing apps in front-end but the possibility and end to end web ecosystem attracted to me grasp full-
                        stack knowledge. Recently I have started exploring other non-web-only languages and technologies like Cloud computing, Machine Learning and System programming that is
                        helping me to broaden my vision and keeping me fueled to learn more.<br />
                        This Blogfolio is one of those learning examples that I have created to serve as a repository of all the open-source contributions, publications, and development I have done.
                        Whatever issues I face during my day to day development and all the reading and research I do to solve them, has to be accessible around the globe. Such that others can also
                        leverage learnings and information. I have pinned down some of my achievements just after this para.
                        Feel free to look around, if you need any help or if you have any suggestions for me, click <Link className={styles.activeLink} to='/contact'> here.</Link>
                        </p>
                        <section style={{ float: 'right' }}>
                            <a href={vskills} target="_blank" rel="noopener noreferrer">
                                <img src={vsk} alt="vskills" title='Vskills' />
                            </a>
                            <a href={hacktoberfest} target="_blank" rel="noopener noreferrer">
                                <img src={hack} alt="hacktoberFest" title='HacktoberFest' className='ml-3' />
                            </a>
                            <a href={alibaba} target="_blank" rel="noopener noreferrer" >
                                <img src={aliba} alt="alibaba" title='Alibaba' className='ml-3' />
                            </a>
                        </section>
                    </div>
                </div>
                <div className="row mt-5 hr-line">
                    <div className="col-sm-12">
                        <h3>Recent Blogs</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ol className={styles.posts}>{posts()}</ol>
                    </div>
                </div>
                <div className="row mt-4 hr-line">
                    <div className="col-sm-12">
                        <h3>Recent GitHub Push</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        {loading
                            ? <div className='row loader m-auto'></div>
                            : <ol className={styles.posts}>{renderRepos()}</ol>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage;
