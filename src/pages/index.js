import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import dp from '../images/photo.jpg';
import vsk from '../images/vcl.png';
import hack from '../images/hacktoberfest.png';
import aliba from '../images/alibaba.png';
import styles from './index.module.scss';
import blogStyle from './blog.module.scss';
import { faLinkedinIn, faGooglePlay, faGithub, faStackOverflow, faDev } from "@fortawesome/free-brands-svg-icons";
import BlogItem from "../components/blogItem";
import { BlogQuery } from "../libs/queryLib";
import { github, linkedin, playStore, gitRepo, starckoverflow, vskills, hacktoberfest, alibaba, dev } from '../libs/dataLib';
import SocialIcon from "../components/socialIcon";

const IndexPage = () => {

    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);

    const posts = () => BlogQuery().map(({ node }, index) => {
        if (index < 2) return <BlogItem key={index} node={node} styles={blogStyle} hideSummary={true} />
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
                            <p>Web Developer | React | JavaScript</p>
                        </div>
                        <div className={styles.social}>
                            <SocialIcon icon={faStackOverflow} to={starckoverflow} />
                            <SocialIcon icon={faDev} to={dev} />
                            <SocialIcon icon={faLinkedinIn} to={linkedin} />
                            <SocialIcon icon={faGooglePlay} to={playStore} size='sm' />
                            <SocialIcon icon={faGithub} to={github} />
                        </div>
                        <section className={styles.badges}>
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
                    <div className="col-sm-12 col-md-8 margin-tp">
                        <code>
                            {`
    // Hi,
    // Welcome to my blogfolio. lets execute the introduction code.

    class Sunny extends WebDeveloper{
        constructor(){
            super('UI', 'Full stack', 'RESTful API');
            this.full_name = 'Sunny Prakash';
            this.lives_in = 'Pune, India';
        }
        
        getAcademics(){
            return 'Graduated from Birla Institute of Technology, Mesra'
        }
        
        createdBlogFor(){
            return 'Sharing knowledge, creations and learning of mine.'
        }
        
        hasStartedExploring(){
            return 'Cloud Computing, Modern web development with AI'
        }
    }
                            `}
                        </code>
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
