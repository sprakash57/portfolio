import React from "react";
import Layout from "../components/layout";
import dp from '../images/photo.jpg';
import styles from './index.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn, faGooglePlay, faGithub } from "@fortawesome/free-brands-svg-icons";
import Pop from '../components/pop';

const twitter = "https://twitter.com/sunny_pr_";
const linkedin = "https://www.linkedin.com/in/sunny-prakash-3780ba49";
const playStore = "https://play.google.com/store/apps/developer?id=Sunny+Prakash";
const github = "https://github.com/sprakash57";

const IndexPage = () => {

    return (
        <Layout title='Home'>
            <div className='container fluid'>
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-4 text-center">
                        <img className={styles.photo} src={dp} alt="Photo" />
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
                    <div className="col-sm-12 col-md-8">
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
                <hr />
            </div>
        </Layout>
    )
}

export default IndexPage;
