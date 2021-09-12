import { classnames } from "@/helpers/utils";
import Link from "next/link";
import styles from './index.module.scss';

type Props = {
    href: string;
    children: React.ReactNode | string;
    childProps?: Record<string, any>;
    isExternal?: boolean;
    classForContainer?: string;
    [x: string]: any;
}

const RouteLink = ({ href, children, childProps, classForContainer, isExternal = false, isInline = false, ...rest }: Props) => {
    const anchorProps = !!childProps && { ...childProps };
    return (
        <Link href={href} passHref {...rest}>
            <a
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
                className={classnames(classForContainer, isInline && styles.copylink)}
                {...anchorProps}
            >
                {children}
            </a>
        </Link>
    )
}

export default RouteLink;