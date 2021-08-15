import styles from '@/styles/components/Footer.module.scss';
import Image from 'next/image';
import { RouteLink } from '@/components/Common';

const Footer = () => {
    return (
        <section className={styles.footerContainer}>
            <p className={styles.contact}>Great!! You have made it to the last. Liked something?! send me a mail at <span className={styles.copylink} title="Copy Email">sunny.prakashgm@gmail.com</span>. Find me on telegram <span className={styles.copylink} title="Telegram">@sprakash57</span> and social platforms mentioned in the footer.</p>
            <footer className={styles.footer}>
                <RouteLink href="https://www.npmjs.com/~sprakash57" isExternal>
                    <figure className={styles.socialIcon}>
                        <Image src={require("@/public/icons/npm.svg")} alt="NPM" title="NPM" width={20} height={20} />
                    </figure>
                </RouteLink>
                <RouteLink href="https://play.google.com/store/apps/developer?id=Sunny+Prakash" isExternal>
                    <figure className={styles.socialIcon}>
                        <Image src={require("@/public/icons/playstore.svg")} alt="Play Store" title="Play store" width={20} height={20} />
                    </figure>
                </RouteLink>
                <RouteLink href="https://twitter.com/sunny_pr_" isExternal>
                    <figure className={styles.socialIcon}>
                        <Image src={require("@/public/icons/twitter.svg")} alt="Twitter" title="Twitter" width={20} height={20} />
                    </figure>
                </RouteLink>
                <RouteLink href="https://github.com/sprakash57" isExternal>
                    <figure className={styles.socialIcon}>
                        <Image src={require("@/public/icons/github.svg")} alt="Github" title="Github" width={20} height={20} />
                    </figure>
                </RouteLink>
                <RouteLink href="https://dev.to/sprakash57" isExternal>
                    <figure className={styles.socialIcon}>
                        <Image src={require("@/public/icons/dev.svg")} alt="Dev.to" title="Dev.to" width={20} height={20} />
                    </figure>
                </RouteLink>
                <RouteLink href="http://www.linkedin.com/in/sunny-prakash-3780ba49" isExternal>
                    <figure className={styles.socialIcon}>
                        <Image src={require("@/public/icons/linkedin.svg")} alt="Linkedin" title="LinkedIn" width={20} height={20} />
                    </figure>
                </RouteLink>
                <RouteLink href="https://stackoverflow.com/users/9585068/sunny-prakash" isExternal>
                    <figure className={styles.socialIcon}>
                        <Image src={require("@/public/icons/stackoverflow.svg")} alt="Stackoverflow" title="Stackoverflow" width={20} height={20} />
                    </figure>
                </RouteLink>
            </footer>
        </section>
    )
}

export default Footer
