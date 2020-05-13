import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import dp from '../images/photo.jpg';
import vsk from '../images/vcl.png';
import hack from '../images/hacktoberfest.png';
import styles from './index.module.scss';
import blogStyle from './blog.module.scss';
import { faLinkedinIn, faGooglePlay, faGithub, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Pop from '../components/pop';
import BlogItem from "../components/blogItem";
import { BlogQuery } from "../libs/queryLib";
import { github, linkedin, playStore, gitRepo, starckoverflow, twitter, vskills, hacktoberfest } from '../libs/dataLib';
import SocialIcon from "../components/socialIcon";
import { Link } from "gatsby";

const IndexPage = () => {

    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);

    const posts = () => BlogQuery().map(({ node }, index) => {
        if (index > 2) return <></>;
        return <BlogItem key={index} node={node} styles={blogStyle} hideSummary={true} />
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
        return <></>
    })

    const loadGitRepos = async () => {
        try {
            const response = await fetch(gitRepo);
            const data = await response.json();
            setRepos(data)
        } catch (error) {
            console.log(error);
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
                        <p className='text-justify'>Welcome to my blog page! I am Sunny Prakash, a Software Engineer. Two reasons why
                        i have created this site. <em>First</em> and foremost, I always wanted to share my learning through blogs. Whatever issues i face during my day to day development
                        and all the digging which i do on stackoverflow, github issues or reading to solve them, to be placed somewhere. More like a respository to me
                        to look back what i have learned and also help others with their issue. <em>Second</em>, I wanted to showcase my creations, what i do and what i
                        develop somewhere over the internet. Well what could be the best place than your own blogfolio site. Feel free to look around, if you need any help or
                        if you have any suggestions for me, you can find me <Link to='/contact'> here</Link>.
                        </p>
                        <section className='row'>
                            <article className="col-md-2 offset-md-10 col-sm-3 offset-sm-9">
                                <a href={vskills} target="_blank" rel="noopener noreferrer">
                                    <img src={vsk} alt="vskills" title='Vskills' className={styles.imageIcon} />
                                </a>
                                <a href={hacktoberfest} target="_blank" rel="noopener noreferrer">
                                    <img src={hack} alt="hacktoberFest" title='HacktoberFest' className={styles.imageIcon} />
                                </a>
                            </article>
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
