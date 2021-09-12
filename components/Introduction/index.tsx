import { RouteLink } from "@/common-components";
import styles from './index.module.scss';

const Introduction = () => {
    return (
        <p className={styles.intro}>
            Hi, I am <strong className={styles.intro__name}>Sunny Prakash</strong> and welcome to SUPRDEV, space where I create, write and publish my content.
            I am a Professional Developer, Blogger and Open source contributor. Want to <RouteLink href="/about" isInline>learn more about me</RouteLink>?
        </p>
    )
}

export default Introduction;
