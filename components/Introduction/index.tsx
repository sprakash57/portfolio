import { classnames } from '@/helpers/utils';
import { RouteLink, Icon } from '@/components/Elements';
import styles from './index.module.scss';
import { Icons } from '@/helpers/constants';

const Introduction = () => {
  return (
    <section className={styles.intro}>
      <RouteLink href="/blogs" classForContainer={classnames(styles['intro__link'], styles['intro__link--tomato50'])}>
        <article className={classnames(styles.intro__article, styles['intro__article--tomato'])}>
          <span className={styles.intro__text}>Read</span>
          <Icon name={Icons.READ} styles={styles.intro__icon} />
        </article>
      </RouteLink>
      <RouteLink
        href="/projects#videos"
        scroll={false}
        classForContainer={classnames(styles['intro__link'], styles['intro__link--blue50'])}
      >
        <article className={classnames(styles.intro__article, styles['intro__article--blue'])}>
          <span className={styles.intro__text}>Watch</span>
          <Icon name={Icons.WATCH} styles={styles.intro__icon} />
        </article>
      </RouteLink>
      <RouteLink href="/projects" classForContainer={classnames(styles['intro__link'], styles['intro__link--green50'])}>
        <article className={classnames(styles.intro__article, styles['intro__article--green'])}>
          <span className={styles.intro__text}>Explore</span>
          <Icon name={Icons.EXPLORE} styles={styles.intro__icon} />
        </article>
      </RouteLink>
      <RouteLink href="/about" classForContainer={classnames(styles['intro__link'], styles['intro__link--gray50'])}>
        <article className={classnames(styles.intro__article, styles['intro__article--gray'])}>
          <span className={styles.intro__text}>Contact</span>
          <Icon name={Icons.EMAIL} styles={styles.intro__icon} />
        </article>
      </RouteLink>
    </section>
  );
};

export default Introduction;
