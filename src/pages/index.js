import React from "react";
import Layout from "../components/layout";
import dp from '../images/photo.jpg';
import styles from './index.module.scss';
import blogStyle from './blog.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn, faGooglePlay, faGithub } from "@fortawesome/free-brands-svg-icons";
import Pop from '../components/pop';
import BlogItem from "../components/blogItem";
import { BlogQuery } from "../libs/queryLib";
import { twitter, github, linkedin, playStore } from '../libs/dataLib';

const IndexPage = () => {

    const posts = () => BlogQuery().map(({ node }, index) => {
        if (index > 2) return <></>;
        return <BlogItem key={index} node={node} styles={blogStyle} />
    })

    return (
        <Layout title='Home'>
            <div className='container'>
                <div className="row pt-5 hr-line">
                    <div className="col-sm-12 col-md-4 text-center">
                        <img className={styles.photo} src={dp} alt="me" />
                        <div className='mt-3'>
                            <p>Web Develoer | React | JavaScript</p>
                        </div>
                        <div className={styles.social}>
                            <a href={twitter} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} color='grey' />
                            </a>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} color='grey' />
                            </a>
                            <a href={playStore} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGooglePlay} color='grey' size="sm" />
                            </a>
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} color='grey' />
                            </a>
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
                <div className="row mt-4">
                    <div className="col-sm-12">
                        <h3>Recent Blogs</h3>
                    </div>
                </div>
                <div className="row hr-line">
                    <div className="col">
                        <ol className={styles.posts}>{posts()}</ol>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-12">
                        <h3>Recent Work</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage;
