import RouteLink from "./RouteLink";
import styles from "@/styles/components/common/Button.module.scss";

type Props = {
    label: string;
    href: string;
    as?: string;
}

const Button = ({ as = "link", label, href }: Props) => {
    if (as === "link") {
        return (
            <RouteLink href={href} classForContainer={styles.viewMore}>
                {label}
            </RouteLink>
        )
    }
    return <button>{label}</button>
}

export default Button;
