import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icon, RouteLink } from '@/components/Elements';
import Brand from '@/public/brand.svg';
import styles from './index.module.scss';
import { Icons, SocialLinks } from '@/helpers/constants';

const NavMenu = () => {
  const router = useRouter();
  return (
    <>
      <nav className={styles.nav}>
        <RouteLink href="/" classForContainer={styles.nav__brand}>
          <Image src={Brand} alt="Brand" />
        </RouteLink>
        <section className={styles.nav__menu}>
          <RouteLink
            href="/"
            childProps={{ id: 'menu-home' }}
            classForContainer={router.asPath === '/' ? styles.active : ''}
          >
            Home
          </RouteLink>
          <RouteLink
            href="/blogs"
            childProps={{ id: 'menu-blogs' }}
            classForContainer={router.asPath === '/blogs' ? styles.active : ''}
          >
            Blogs
          </RouteLink>
          <RouteLink
            href="/projects"
            childProps={{ id: 'menu-projects' }}
            classForContainer={router.asPath === '/projects' ? styles.active : ''}
          >
            Projects
          </RouteLink>
          <RouteLink
            href="/about"
            childProps={{ id: 'menu-about' }}
            classForContainer={router.asPath === '/about' ? styles.active : ''}
          >
            About
          </RouteLink>
        </section>
      </nav>
      <section className={styles.weblinks}>
        <RouteLink href={SocialLinks.TWITTER} isExternal>
          <figure className={styles.weblinks__icons} title={Icons.TWITTER}>
            <Icon name={Icons.TWITTER} width="16" height="16" />
          </figure>
        </RouteLink>
        <RouteLink href={SocialLinks.GITHUB} isExternal>
          <figure className={styles.weblinks__icons} title={Icons.GITHUB}>
            <Icon name={Icons.GITHUB} width="16" height="16" />
          </figure>
        </RouteLink>
        <RouteLink href={SocialLinks.LINKEDIN} isExternal>
          <figure className={styles.weblinks__icons} title={Icons.LINKEDIN}>
            <Icon name={Icons.LINKEDIN} width="16" height="16" />
          </figure>
        </RouteLink>
        <RouteLink href={SocialLinks.YOUTUBE} isExternal>
          <figure className={styles.weblinks__icons} style={{ padding: '0.1rem' }} title={Icons.YOUTUBE}>
            <Icon name={Icons.YOUTUBE} width="16" height="16" />
          </figure>
        </RouteLink>
      </section>
    </>
  );
};

export default NavMenu;
