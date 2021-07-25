import Link from "next/link";

type Props = {
    href: string;
    children: React.ReactNode | string;
    childProps?: Record<string, any>;
    classForContainer?: string;
    [x: string]: any;
}

const RouteLink = ({ href, children, childProps, classForContainer, ...rest }: Props) => {
    const anchorProps = !!childProps && { ...childProps };
    return (
        <Link href={href} passHref {...rest}>
            <a
                className={!!classForContainer ? classForContainer : ""}
                {...anchorProps}
            >
                {children}
            </a>
        </Link>
    )
}

export default RouteLink;