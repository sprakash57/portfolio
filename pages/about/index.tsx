import { Icon, RouteLink } from '@/components/Elements';
import styles from './index.module.scss';
import { Icons, SERVICES, SocialLinks, TEAM } from '@/helpers/constants';
import TeamCard, { ITeamCard } from '@/components/Team/TeamCard';
import Image from 'next/future/image';
import Berlin from '@/public/berlin.jpg';

const ABOUT = {
  aboutUs: {
    title: 'ABOUT US',
    subtitle:
      'Career guidance in Web and Mobile Development. 3x your current salary. Web and App based solution provider.',
  },
  whoWeAre: {
    title: 'WHO WE ARE?',
    description: `CODESUPR.com is a platform for technical content and Career guidance in Web development industry. We write blogs and create videos not only for latest Web technologies but also about finding better jobs in software industry, boost your resume content and to make your LinkedIn profile more attractive. We also work with our clients to design solution for their business problem. We have also expertise in providing training and consulation for software enginners and students.`,
  },
  ourGoal: {
    title: 'OUR GOAL',
    description: `We believe that every developer should get the opportunity achieve their best version. And we are doing so by leveling the playing field. You will get all the training and information you need to succeed in your career. This applies not only to an individual but also to small businesses who are less on budget and want to push their presence in the competitive market via an elegant Web solution.`,
  },
  contactUs: {
    title: 'HOW CAN WE HELP YOU?',
    subtitle: `Get in touch us. We'd love to hear from you.`,
  },
};

const About = () => {
  // if (!about) return <NoData type={Alerts.DANGER} message="About page is not available right now." />;
  const { aboutUs, whoWeAre, ourGoal, contactUs } = ABOUT;
  return (
    <section className={styles.about}>
      <div className={styles.about__row} id="intro">
        <h1>{aboutUs.title}</h1>
        <h3>{aboutUs.subtitle}</h3>
      </div>
      <div className={styles.about__row}>
        <h1>{whoWeAre.title}</h1>
        <div className={styles.about__service}>
          <p>{whoWeAre.description}</p>
          <div className={styles.about__services}>
            {SERVICES.map(({ title, route, icon }) => (
              <RouteLink href={route} key={title}>
                <figure>
                  <Icon name={icon} width="80" height="80" color="var(--arsenic)" />
                </figure>
                <strong>{title}</strong>
              </RouteLink>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.about__row} id="goal">
        <h1>{ourGoal.title}</h1>
        <p>{ourGoal.description}</p>
      </div>
      <div className={styles.about__row} id="team">
        <h1>MEET OUR TEAM</h1>
        <div className={styles.about__team}>
          {TEAM.map((props: ITeamCard) => (
            <TeamCard key={props.name} {...props} />
          ))}
        </div>
      </div>
      <div className={styles.about__row}>
        <h1>{contactUs.title}</h1>
        <h3>{contactUs.subtitle}</h3>
        <RouteLink href="/contact" classForContainer={styles.about__contact} aria-current="page">
          <span>Contact us</span>
        </RouteLink>
      </div>
      <div className={styles.about__row} id="location">
        <h1>FIND US</h1>
        <div className={styles.about__find_us}>
          <figure>
            <Image src={Berlin} alt="Berlin" width={200} height={200} />
            <figcaption>Berlin</figcaption>
          </figure>
          <div className={styles.about__followus}>
            <h3>follow us on social platforms</h3>
            <figure>
              <RouteLink href={SocialLinks.YOUTUBE} isExternal>
                <Icon name={Icons.YOUTUBE} width="32" height="32" />
              </RouteLink>
              <RouteLink href={SocialLinks.LINKEDIN} isExternal>
                <Icon name={Icons.LINKEDIN} withBg color="var(--frenchBlue)" width="30" height="30" />
              </RouteLink>
              <RouteLink href={SocialLinks.FACEBOOK} isExternal>
                <Icon name={Icons.FACEBOOK} withBg color="var(--denim)" width="30" height="30" />
              </RouteLink>
              <RouteLink href={SocialLinks.TWITTER} isExternal>
                <Icon name={Icons.TWITTER} color="var(--pictonBlue)" width="32" height="32" />
              </RouteLink>
              <RouteLink href={SocialLinks.INSTAGRAM} isExternal>
                <Icon name={Icons.INSTAGRAM} width="35" height="35" />
              </RouteLink>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// export async function getStaticProps() {
//   const tryProjects = await fetch(`${process.env.METADATA_BASE_URL}/about.json`);
//   const response = (await tryProjects.json()) as About;
//   return {
//     props: {
//       about: tryProjects.ok ? response : null,
//     },
//   };
// }
