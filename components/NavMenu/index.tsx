import { RouteLink } from '@/common-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Brand from '@/public/brand.svg';
import styles from './index.module.scss';
import { SocialLinks } from '@/helpers/constants';

const NavMenu = () => {
  const router = useRouter();
  return (
    <>
      <nav className={styles.nav}>
        <RouteLink href="/" classForContainer={styles.navBrand}>
          <Image src={Brand} alt="Brand" />
        </RouteLink>
        <section className={styles.navMenu}>
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
      <section className={styles.icons}>
        <RouteLink href={SocialLinks.Twitter} isExternal>
          <figure className={styles.socialIcon}>
            <Image src={require('@/public/icons/twitter.svg')} alt="Twitter" title="Twitter" width={15} height={15} />
          </figure>
        </RouteLink>
        <RouteLink href={SocialLinks.GitHub} isExternal>
          <figure className={styles.socialIcon}>
            <Image src={require('@/public/icons/github.svg')} alt="Github" title="Github" width={15} height={15} />
          </figure>
        </RouteLink>
        <RouteLink href={SocialLinks.LinkedIn} isExternal>
          <figure className={styles.socialIcon}>
            <Image
              src={require('@/public/icons/linkedin.svg')}
              alt="Linkedin"
              title="LinkedIn"
              width={15}
              height={15}
            />
          </figure>
        </RouteLink>
        <RouteLink href={SocialLinks.YouTube} isExternal>
          <figure className={styles.socialIcon} style={{ padding: '0.1rem' }}>
            <Image src={require('@/public/icons/youtube.svg')} alt="Youtube" title="Youtube" width={20} height={20} />
          </figure>
        </RouteLink>
      </section>
    </>
  );
};

export default NavMenu;
