import { RouteLink } from "@/common-components";
import styles from './index.module.scss';

/* eslint-disable react/display-name */
const MDXComponents = {
    inlineCode: (props: any) => <code className={styles.inlineCode}>{props.children}</code>,
    // eslint-disable-next-line @next/next/no-img-element
    img: (props: any) => <img className={styles.image} src={props.src} alt="Code snippet" />,
    pre: (props: any) => <pre className={styles.snippets}>{props.children}</pre>,
    h2: (props: any) => <h2 className={styles.header2}>{props.children}</h2>,
    blockquote: (props: any) => <blockquote className={styles.blockquote}>{props.children}</blockquote>,
    a: (props: any) => <RouteLink href={props.href} classForContainer={styles.link}>{props.children}</RouteLink>
}

export default MDXComponents
