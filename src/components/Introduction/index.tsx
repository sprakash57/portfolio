import ProfilePhoto from 'assets/sunny.jpg';
import { LinkedIn, Facebook, Twitter, Mastodon, Medium } from 'assets/icons';
import { Sections } from 'helpers/constants';
import Layout from 'components/common/Layout';
import styles from './index.module.css';

const Introduction = () => {
  return (
    <Layout scrollTo={Sections.Read}>
      <figure className={styles.figure}>
        <img src={ProfilePhoto} alt="Profile photo" className={styles.image} />
      </figure>
      <h1 className={styles.profileName}>Sunny Prakash</h1>
      <p className={styles.bio}>Web Developer & Blogger</p>
      <ul className={styles.socialList}>
        <li className={styles.socialListItem}>
          <a href="https://www.linkedin.com/in/sunnyprakash12" rel="noreferrer noopener" target="_blank" title="LinkedIn">
            <LinkedIn />
          </a>
        </li>
        <li className={styles.socialListItem}>
          <a href="https://sunny-prakash.medium.com" rel="noreferrer noopener" target="_blank" title="Medium">
            <Medium />
          </a>
        </li>
        <li className={styles.socialListItem}>
          <a href="https://twitter.com/sunny_pr_" rel="noreferrer noopener" target="_blank" title="Twitter">
            <Twitter />
          </a>
        </li>
        <li className={styles.socialListItem}>
          <a href="https://mastodon.social/@sunnyprakash" rel="noreferrer noopener" target="_blank" title="Mastodon">
            <Mastodon />
          </a>
        </li>
        <li className={styles.socialListItem}>
          <a href="https://www.facebook.com/sprgm" rel="noreferrer noopener" target="_blank" title="Facebook">
            <Facebook />
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default Introduction;
