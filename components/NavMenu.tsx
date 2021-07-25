import RouteLink from "./Common/RouteLink";
import styles from '../styles/components/NavMenu.module.scss';
import Image from "next/dist/client/image";
import Brand from '../public/brand.svg';

const NavMenu = () => {
    return (
        <nav className={styles.nav}>
            <RouteLink href="/" classForContainer={styles.navBrand}>
                <Image src={Brand} alt="Brand" />
            </RouteLink>
            <section className={styles.navMenu}>
                <RouteLink href="/">/</RouteLink>
                <RouteLink href="/blogs">Blogs</RouteLink>
                <RouteLink href="/projects">Project</RouteLink>
                <RouteLink href="/about">About</RouteLink>
            </section>
        </nav>
    )
}

export default NavMenu
