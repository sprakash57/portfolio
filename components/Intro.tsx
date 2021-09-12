import styles from '../styles/components/Intro.module.scss';
import { RouteLink } from "@/common-components";

const Intro = () => {
    return (
        <p className={styles.text}>
            Hi, I am <strong className={styles.name}>Sunny Prakash</strong> and welcome to SUPRDEV, space where I create, write and publish my content.
            I am a Professional Developer, Blogger and Open source contributor. Want to <RouteLink href="/about" isInline>learn more about me</RouteLink>?
        </p>
    )
}

export default Intro
