import Image from 'next/image';
import Photo from '@/public/photo.jpg';
import styles from '@/styles/About.module.scss';
import { Header } from '@/components/common';

const About = () => {
    return (
        <section className={styles.container}>
            <Header as="h2" label="Who am I ?" />
            <section className={styles.intro}>
                <figure>
                    <Image src={Photo} alt="Profile" placeholder="blur" className={styles.img} />
                </figure>
                <article>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </article>
            </section>
            <section>
                <Header as="h2" label="My Skillset" />
            </section>
            <section>
                <Header as="h2" label="Achievements" />
            </section>
            <section>
                <Header as="h2" label="Contact me" />
            </section>
        </section>
    )
}

export default About;
