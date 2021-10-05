import { RouteLink } from "@/common-components";
import styles from './index.module.scss';

const Introduction = () => {
    return (
        <p className={styles.intro}>
            Hi, I am <strong className={styles.intro__name}>Sunny Prakash</strong> and welcome to SUPRDEV, a place where I publish technical content, creations and write ups.
            I am a Professional Developer, Blogger and Open source contributor. Want to <RouteLink href="/about" isInline>know more about me</RouteLink>?
        </p>
    )
}

export default Introduction;
