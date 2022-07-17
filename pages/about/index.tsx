import { IconButton, Icon } from '@/components/Elements';
import { Icons, Alerts } from '@/helpers/constants';
import Image from 'next/image';
import styles from './index.module.scss';
import { classnames } from '@/helpers/utils';
import NoData from '@/components/NoData';

const About = ({ about }: { about: About }) => {
  if (!about) return <NoData type={Alerts.DANGER} message="About page is not available right now." />;

  const { pic, thumbnail, intro, support, story } = about;
  return (
    <section className={`${styles.about} mv2`}>
      <figure>
        <Image
          src={pic}
          alt="Photo"
          placeholder="blur"
          blurDataURL={thumbnail}
          width={160}
          height={160}
          style={{ borderRadius: '50%' }}
        />
      </figure>
      <summary>{intro.content} - </summary>
      <section className={styles.about__icons}>
        {intro?.platforms &&
          intro.platforms.map(({ name, url, label }) => (
            <IconButton
              key={name}
              text={label}
              url={url}
              type={name.toLowerCase() as Icons}
              icon={label}
              label={label}
              iconContainerStyle={styles.about__container}
              iconStyle={styles.about__icon}
              labelStyle={styles.about__iconlabel}
            />
          ))}
      </section>
      <h2 className={styles.about__story}>{story.title}</h2>
      <summary>{story.content}</summary>
      <ul className={styles.about__services}>
        {story?.options &&
          story.options.map((option, i) => (
            <li key={i}>
              <Icon name={Icons.CHECK} styles={styles.about__check} />
              <label>{option}</label>
            </li>
          ))}
      </ul>
      <h2 className={styles.about__story}>{support.title}</h2>
      <summary>{support.content}</summary>
      <section className={styles.about__support}>
        {support?.platforms &&
          support.platforms.map(({ name, url, label }) => (
            <IconButton
              key={name}
              text={label}
              url={url}
              type={name.toLowerCase() as Icons}
              icon={name}
              label={label}
              iconContainerStyle={styles.about__container}
              iconStyle={classnames(styles.about__icon)}
              labelStyle={styles.about__iconlabel}
            />
          ))}
      </section>
    </section>
  );
};

export default About;

export async function getStaticProps() {
  const tryProjects = await fetch(`${process.env.METADATA_BASE_URL}/about.json`);
  const response = (await tryProjects.json()) as About;
  return {
    props: {
      about: tryProjects.ok ? response : null,
    },
  };
}
