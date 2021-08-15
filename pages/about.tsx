import Image from 'next/image';
import Photo from '@/public/photo.jpg';
import { aboutMe, milestones, skills } from '@/data/about';
import styles from '@/styles/About.module.scss';
import { Card, Header, Tag, Legend } from '@/components/common';
import Check from '@/public/icons/check.svg';

const About = () => {
    return (
        <section className={styles.container}>
            <section className={styles.intro}>
                <figure>
                    <Image src={Photo} alt="Profile" placeholder="blur" className={styles.img} />
                </figure>
                <article dangerouslySetInnerHTML={{ __html: aboutMe }} />
            </section>
            <Header as="h2" label="My Skillset" />
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
                <Header as="h2" label="Achievements" />
                {milestones.map(milestone => (
                    <article key={milestone.year} className={styles.milestone}>
                        <h4>{milestone.year}</h4>
                        <ul>
                            {milestone.achievements.map((achievement, i) => (
                                <li key={i}>
                                    <Image src={Check} alt="Check" width={12} height={12} />
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
