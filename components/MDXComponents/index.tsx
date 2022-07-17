import { RouteLink } from '@/components/Elements';
import styles from './index.module.scss';

const MDXComponents = {
  code: (props: any) => <code className={styles.inlineCode}>{props.children}</code>,
  img: (props: any) => <img className={styles.image} src={props.src} alt="Image" role="image" />,
  pre: (props: any) => <pre className={styles.snippets}>{props.children}</pre>,
  h2: (props: any) => <h2 className={styles.header2}>{props.children}</h2>,
  blockquote: (props: any) => <blockquote className={styles.blockquote}>{props.children}</blockquote>,
  a: (props: any) => (
    <RouteLink href={props.href} classForContainer={styles.link}>
      {props.children}
    </RouteLink>
  ),
};

export default MDXComponents;
