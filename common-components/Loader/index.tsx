import styles from './index.module.scss';

const Loader = () => {
    return (
        <section className={styles.loader}>
            <div className={styles.loader__icon} />
        </section>
    )
}

export default Loader
