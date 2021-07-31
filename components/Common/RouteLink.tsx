import Link from "next/link";

type Props = {
    href: string;
    children: React.ReactNode | string;
    childProps?: Record<string, any>;
    isExternal?: boolean;
    classForContainer?: string;
    [x: string]: any;
}

const RouteLink = ({ href, children, childProps, classForContainer, isExternal = false, ...rest }: Props) => {
    const anchorProps = !!childProps && { ...childProps };
    return (
        <Link href={href} passHref {...rest}>
            <a
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
                className={!!classForContainer ? classForContainer : ""}
                {...anchorProps}
            >
                {children}
            </a>
        </Link>
    )
}

export default RouteLink;