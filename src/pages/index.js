import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import dp from '../images/photo.jpg';
import styles from './index.module.scss';
import blogStyle from './blog.module.scss';
import { faLinkedinIn, faGooglePlay, faGithub, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Pop from '../components/pop';
import BlogItem from "../components/blogItem";
import { BlogQuery } from "../libs/queryLib";
import { github, linkedin, playStore, gitRepo, starckoverflow, twitter } from '../libs/dataLib';
import SocialIcon from "../components/socialIcon";

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
                        <p>Welcome to my blog page! I am Sunny Prakash, a Full stack developer from Pune.Lorem ipsum dolor
                        sit amet consectetur, adipisicing elit. Molestias et facere officiis nihil. Ex modi reiciendis quam.
                        Molestiae explicabo, possimus doloremque quaerat laudantium ad id in tenetur velit aliquid nesciunt.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sint magnam, officia quis
                        doloremque sit qui consectetur fugiat, at incidunt earum corporis facilis eum ab? Praesentium odit
                        qui atque molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tempora
                        beatae fuga suscipit error voluptate neque tenetur cupiditate, culpa inventore rem odit officiis in
                        modi quod porro reiciendis molestiae vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Id perspiciatis veritatis impedit exercitationem hic ratione asperiores libero recusandae vel fugiat
                         fuga ad dicta quasi magni saepe, facere ipsam obcaecati aspernatur.</p>
                    </div>
                </div>
                <div className="row mt-4 hr-line">
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
