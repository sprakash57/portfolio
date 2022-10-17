import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icon, RouteLink } from '@/components/Elements';
import Brand from '@/public/logo_square.png';
import styles from './index.module.scss';
import { Icons } from '@/helpers/constants';
import { classnames } from '@/helpers/utils';
import { useHandleClickOutside } from '@/helpers/hooks';

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
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useHandleClickOutside(() => setShowServices(false));
  const getActivePath = (route: string, baseClass: string, activeClass = styles.active) => {
    return router.asPath === route ? classnames(baseClass, activeClass) : baseClass;
  };

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
            classForContainer={getActivePath('/', styles.nav__menu_routes)}
            aria-current="page"
          >
            <span>Home</span>
          </RouteLink>
          <RouteLink
            href="/about"
            childProps={{ id: 'menu-about' }}
            classForContainer={getActivePath('/about', styles.nav__menu_routes)}
            aria-current="page"
          >
            <span>About</span>
          </RouteLink>
          <RouteLink
            href="/blogs"
            childProps={{ id: 'menu-blogs' }}
            classForContainer={getActivePath('/blogs', styles.nav__menu_routes)}
            aria-current="page"
          >
            <span>Blog</span>
          </RouteLink>
          <div ref={servicesRef} className={styles.nav__dropdown}>
            <div
              className={classnames(
                styles.nav__dropdown_btn,
                ['/consult', '/videos', '/products'].includes(router.pathname) && styles.active
              )}
              role="button"
              onClick={() => setShowServices((prev) => !prev)}
            >
              <span>Services</span> <Icon name="caret" color="var(--tomato)" />
            </div>
            <div
              className={classnames(
                styles.nav__dropdown_routes,
                styles[`${showServices ? 'show_services' : 'hide_services'}`]
              )}
              role="button"
              onClick={() => setShowServices(false)}
            >
              <RouteLink
                href="/videos"
                childProps={{ id: 'menu-videos' }}
                classForContainer={getActivePath('/videos', styles.nav__dropdown_menu, styles.active_menu)}
                aria-current="page"
              >
                <span>Tutorials</span>
              </RouteLink>
              <RouteLink
                href="/consult#job"
                childProps={{ id: 'menu-job' }}
                classForContainer={getActivePath('/consult#job', styles.nav__dropdown_menu, styles.active_menu)}
                aria-current="page"
              >
                <span>Job Search</span>
              </RouteLink>
              <RouteLink
                href="/consult#career"
                childProps={{ id: 'menu-career' }}
                classForContainer={getActivePath('/consult#career', styles.nav__dropdown_menu, styles.active_menu)}
                aria-current="page"
              >
                <span>Consultation</span>
              </RouteLink>
              <RouteLink
                href="/consult#engineering"
                childProps={{ id: 'menu-engineering' }}
                classForContainer={getActivePath('/consult#engineering', styles.nav__dropdown_menu, styles.active_menu)}
                aria-current="page"
              >
                <span>Engineering</span>
              </RouteLink>
              <RouteLink
                href="/products"
                childProps={{ id: 'menu-products' }}
                classForContainer={getActivePath('/products', styles.nav__dropdown_menu, styles.active_menu)}
                aria-current="page"
              >
                <span>Products</span>
              </RouteLink>
            </div>
          </div>
          <RouteLink
            href="/contact"
            childProps={{ id: 'menu-contact' }}
            classForContainer={getActivePath('/contact', styles.nav__menu_routes)}
            aria-current="page"
          >
            <span>Contact</span>
          </RouteLink>
        </section>
      </section>
    </nav>
  );
};

export default NavMenu;
