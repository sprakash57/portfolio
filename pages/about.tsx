import Image from 'next/image';
import Photo from '@/public/photo.jpg';
import { achievements, skills } from '@/data/about';
import styles from '@/styles/About.module.scss';
import { Card, Header, Tag } from '@/components/common';
import Legend from '@/components/common/Legend';

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
            <Header as="h2" label="My Skillset" />
            <Legend />
            <section className={styles.skillSection}>
                {skills.map(skill => (
                    <Card key={skill.area} className={styles.skillCard}>
                        <Card.Body>
                            <Card.Title>
                                <h3>{skill.area}</h3>
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
                <p>Few milestones that I have achieved in past couple of years.</p>
                {achievements.map(achievement => (
                    <Card key={achievement}>
                        <Card.Body>
                            <article className={styles.contactMe}>{achievement}</article>
                        </Card.Body>
                    </Card>
                ))}
            </section>
            <Header as="h2" label="Contact me" />
            <article className={styles.contactMe}>
                I use my spare time in open source project contribution, writing blogs, helping folks on telegram
                channels and Stackoverflow. If you think I can be of any help with your venture or maybe you want to utilize my skills, I am just an email
                away. You can send me your queries/suggestions/feedback to <em><u><strong>sunny.prakashgm@gmail.com</strong></u></em>. Find me on telegram
                (username: <strong>@sprakash57</strong>) or the social platforms present in the footer.
            </article>
        </section>
    )
}

export default About;
