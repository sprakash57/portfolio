import { classnames } from '@/helpers/utils';
import RouteLink from 'common-components/RouteLink';
import Icon from '../Elements/Icons/Icon';
import styles from './index.module.scss';

const Introduction = () => {
  return (
    <section className={styles.intro}>
      <RouteLink href="/blogs">
        <article className={classnames(styles.intro__article, styles['intro__article--red'])}>
          <span className={styles.intro__text}>Read</span>
          <Icon name="Read" styles={styles.intro__icon} />
        </article>
      </RouteLink>
      <RouteLink href="/projects#videos" scroll={false}>
        <article className={classnames(styles.intro__article, styles['intro__article--blue'])}>
          <span className={styles.intro__text}>Watch</span>
          <Icon name="Watch" styles={styles.intro__icon} />
        </article>
      </RouteLink>
      <RouteLink href="/projects">
        <article className={classnames(styles.intro__article, styles['intro__article--green'])}>
          <span className={styles.intro__text}>Explore</span>
          <Icon name="Explore" styles={styles.intro__icon} />
        </article>
      </RouteLink>
      <RouteLink href="/about">
        <article className={classnames(styles.intro__article, styles['intro__article--gray'])}>
          <span className={styles.intro__text}>Contact</span>
          <Icon name="Email" styles={styles.intro__icon} />
        </article>
      </RouteLink>
    </section>
  );
};

export default Introduction;
