import { classnames } from '@/helpers/utils';
import styles from '@/styles/components/common/Legend.module.scss';
const legend = [
    { label: "Expert", type: "solid" },
    { label: "Learning", type: "outline" }
]

const Legend = ({ layout = "horizontal" }: { layout?: string }) => {
    return (
        <section className={classnames(styles.legendContainer, layout)}>
            {legend.map(item => (
                <div key={item.label}>
                    <div className={classnames(styles.point, styles[item.type])} />
                    <span>{item.label}</span>
                </div>
            ))}
        </section>
    )
}

export default Legend
