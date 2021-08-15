import { RouteLink } from "@/common/index";
import styles from '../styles/components/NavMenu.module.scss';
import Image from "next/dist/client/image";
import Brand from '@/public/brand.svg';
import React from "react";

const NavMenu = () => {
    const setActive = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        const closestEl = target.closest("a");
        if (target.id.includes("menu-") && closestEl) {
            closestEl.parentElement?.childNodes.forEach((child: any) => {
                if (child.id === closestEl.id) {
                    child.classList.add(styles.active);
                } else {
                    child.classList.remove(styles.active);
                }
            });
            console.dir(closestEl.parentElement?.childNodes);
        }
    }
    return (
        <nav className={styles.nav}>
            <RouteLink href="/" classForContainer={styles.navBrand}>
                <Image src={Brand} alt="Brand" />
            </RouteLink>
            <div className={styles.navMenu} role="Button" onClick={setActive}>
                <RouteLink href="/" childProps={{ id: "menu-home" }} classForContainer={styles.active}>Home</RouteLink>
                <RouteLink href="/blogs" childProps={{ id: "menu-blogs" }}>Blogs</RouteLink>
                <RouteLink href="/projects" childProps={{ id: "menu-projects" }}>Projects</RouteLink>
                <RouteLink href="/about" childProps={{ id: "menu-about" }}>About</RouteLink>
            </div>
        </nav>
    )
}

export default NavMenu
