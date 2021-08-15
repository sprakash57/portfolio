import { RouteLink } from "@/components/Common";
import styles from '../styles/components/NavMenu.module.scss';
import Image from "next/dist/client/image";
import Brand from '@/public/brand.svg';

const NavMenu = () => {
    return (
        <nav className={styles.nav}>
            <RouteLink href="/" classForContainer={styles.navBrand}>
                <Image src={Brand} alt="Brand" />
            </RouteLink>
            <div className={styles.navMenu}>
                <RouteLink href="/" childProps={{ id: "menu-home" }} classForContainer={styles.active}>Home</RouteLink>
                <RouteLink href="/blogs" childProps={{ id: "menu-blogs" }}>Blogs</RouteLink>
                <RouteLink href="/projects" childProps={{ id: "menu-projects" }}>Projects</RouteLink>
                <RouteLink href="/about" childProps={{ id: "menu-about" }}>About</RouteLink>
            </div>
        </nav>
    )
}

export default NavMenu
