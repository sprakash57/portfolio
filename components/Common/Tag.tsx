import styles from '@/styles/components/Common/Tag.module.scss';

type Props = {
    label: string;
    variant?: "solid" | "outline";
    classname?: string;
}

const Tag = ({ label, variant = "solid", classname = "" }: Props) => {
    return <span className={[styles.tag, styles[variant], classname].join(" ")}>{label}</span>
}

export default Tag;
