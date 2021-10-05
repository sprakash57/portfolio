import Image from 'next/image';
import Photo from '@/public/photo.jpg';
import { aboutMe, milestones, skills } from '@/data/about';
import { Card, Tag, Legend } from '@/common-components';
import Check from '@/public/icons/check.svg';
import styles from './index.module.scss';

const About = () => {
    return (
        <section className={styles.container}>
            <section className={styles.intro}>
                <figure>
                    <Image src={Photo} alt="Profile" placeholder="blur" className={styles.img} />
                </figure>
                <article dangerouslySetInnerHTML={{ __html: aboutMe }} />
            </section>
            <header>
                <h2>My Skillset</h2>
            </header>
            <Legend />
            <section className={styles.skillSection}>
                {skills.map(skill => (
                    <Card key={skill.area}>
                        <Card.Body>
                            <Card.Title>
                                <h3 className={styles.header3}>{skill.area}</h3>
                            </Card.Title>
                            <section className={styles.tagsContainer}>
                                {skill.techStack.map((tech, i) => (
                                    <Tag
                                        key={tech}
                                        variant={i >= skill.learning ? "outline" : "solid"}
                                        label={tech}
                                        classname={styles.skillTag}
                                    />
                                ))}
                            </section>
                        </Card.Body>
                    </Card>
                ))}
                <header>
                    <h2>Achievements</h2>
                </header>
                {milestones.map(milestone => (
                    <article key={milestone.year} className={styles.milestone}>
                        <h4>{milestone.year}</h4>
                        <ul>
                            {milestone.achievements.map((achievement, i) => (
                                <li key={i}>
                                    <Image src={Check} alt="Check" width={13} height={13} />
                                    <span dangerouslySetInnerHTML={{ __html: achievement }} />
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default About;
