import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icon, RouteLink } from '@/components/Elements';
import Brand from '@/public/logo_square.png';
import styles from './index.module.scss';
import { Icons } from '@/helpers/constants';
import { classnames } from '@/helpers/utils';

const SOCIAL_LINKS: SocialLinksInNav[] = [
  {
    name: 'twitter',
    color: 'pictonBlue',
    url: 'https://twitter.com/sunny_pr_',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/c/sunnyprakash5712',
    width: '22',
    height: '22',
  },
  {
    name: 'facebook',
    color: 'denim',
    url: 'https://www.facebook.com/suprdev',
    background: true,
  },
  {
    name: 'linkedin',
    color: 'frenchBlue',
    url: 'https://www.linkedin.com/in/sunnyprakash12',
    background: true,
  },
];

const NavMenu = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <section className={styles.nav__social}>
        {SOCIAL_LINKS.map(({ name, url, height = '20', width = '20', color = 'white', background = false }) => (
          <RouteLink key={name} href={url} isExternal>
            <figure className={styles.nav__icons} title={name}>
              <Icon name={name} width={width} height={height} color={`var(--${color})`} withBg={background} />
            </figure>
          </RouteLink>
        ))}
        <figure className={classnames(styles.nav__icons, styles['nav__icons--email'])} title="Email">
          <Icon name={Icons.EMAIL} color="var(--sonicSilver)" width="25" height="25" />
          <span>info@codesupr.com</span>
        </figure>
      </section>
      <section className={styles.nav__navbar}>
        <RouteLink href="/" classForContainer={styles.nav__brand}>
          <Image src={Brand} alt="Brand" />
        </RouteLink>
        <section className={styles.nav__menu} aria-label="breadcrumb">
          <RouteLink
            href="/"
            childProps={{ id: 'menu-home' }}
            classForContainer={router.asPath === '/' ? styles.active : ''}
            aria-current="page"
          >
            <span>Home</span>
          </RouteLink>
          <RouteLink
            href="/blogs"
            childProps={{ id: 'menu-blogs' }}
            classForContainer={router.asPath === '/blogs' ? styles.active : ''}
            aria-current="page"
          >
            <span>Blogs</span>
          </RouteLink>
          <RouteLink
            href="/projects"
            childProps={{ id: 'menu-projects' }}
            classForContainer={router.asPath === '/projects' ? styles.active : ''}
            aria-current="page"
          >
            <span>Services</span>
          </RouteLink>
          <RouteLink
            href="/about"
            childProps={{ id: 'menu-about' }}
            classForContainer={router.asPath === '/about' ? styles.active : ''}
            aria-current="page"
          >
            <span>About</span>
          </RouteLink>
        </section>
      </section>
    </nav>
  );
};

export default NavMenu;
