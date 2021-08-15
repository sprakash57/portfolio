import RouteLink from "./RouteLink";
import styles from "@/styles/components/Common/Button.module.scss";
import { classnames } from "@/helpers/utils";

type Props = {
    label: string;
    href: string;
    as?: string;
    external?: boolean;
    containerClass?: string
}

const Button = ({ as = "link", label, href, external, containerClass = "" }: Props) => {
    if (as === "link") {
        return (
            <RouteLink
                href={href}
                classForContainer={classnames(styles.viewMore, containerClass)}
                isExternal={external}>
                {label}
            </RouteLink>
        )
    }
    return <button>{label}</button>
}

export default Button;
